import * as amqp from 'amqplib';
export class RabbitMQServer {
  private server = null;
  private channel = null;

  constructor(private host: string, private exchange: string) {}

  public async init() {
    this.server = await amqp.connect(this.host);
    // console.log(this.server);
    this.channel = await this.server.createChannel();
    // console.log(this.channel.bind);
  }

  public async publish(data) {
    console.log(data);
    await this.init();
    this.channel.assertExchange(this.exchange, 'fanout', {
      durable: false,
    });
    this.channel.publish(this.exchange, '', Buffer.from(JSON.stringify(data)));
    console.log(' [x] Sent %s', data);
  }

  public async close() {
    this.server.close();
  }

  public async subscribe() {
    await this.init();
    await this.channel.assertExchange(this.exchange, 'fanout', {
      durable: false,
    });
    let q = await this.channel.assertQueue('queue', { exclusive: true });
    console.log('Waiting for Data: ', q.queue);
    q = await this.channel.bind(q.queue, this.exchange, 'queue');

    q = await this.channel.consume(
      q.queue,
      data => {
        if (data.content) {
          console.log(' [x] %s', JSON.stringify(data.content.toString()));
        }
      },
      { noAck: true },
    );
  }
}
