import { AllModules } from './module/all.module';
import config from './config/environment/configuration';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './module/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ItemsModule,
    MongooseModule.forRoot(config.mongoUrl, {
      useFindAndModify: false,
      useNewUrlParser: true,
    }),
    AllModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
