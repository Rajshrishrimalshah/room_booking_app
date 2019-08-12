import { Item } from '../interface/item.interface';
import { ItemsService } from './../service/items.service';
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemType } from '../dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() createItemDto: ItemType): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: Item): Promise<Item> {
    return this.itemsService.update(id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Item> {
    console.log('delete controller');
    return this.itemsService.delete(id);
  }
}
