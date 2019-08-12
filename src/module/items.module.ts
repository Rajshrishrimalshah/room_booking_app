import { Module } from '@nestjs/common';
import { ItemsResolver } from '../graphql/resolver/items.resolver';
import { ItemSchema } from '../model/item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from '../service/items.service';
import { ItemsController } from 'src/controller/items.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsResolver, ItemsService],
})
export class ItemsModule {}
