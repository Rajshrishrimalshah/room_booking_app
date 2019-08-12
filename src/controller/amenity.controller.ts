import { AmenityType } from './../dto/amenity.dto';
import { AmenityService } from './../service/amenity.service';
import { Amenity } from './../interface/amenity.interface';
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

@Controller('amenity')
export class AmenityController {
  constructor(private readonly amenityService: AmenityService) {}

//   @Get()
//    findAll(): string {
//     return 'Hello Wolrd!';
//   }

  @Post()
  async create(@Body() createItemDto: AmenityType): Promise<Amenity> {
    return this.amenityService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Amenity[]> {
    return this.amenityService.findAll();
  }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<Item> {
//     return this.itemsService.findOne(id);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() updateCatDto: Item): Promise<Item> {
//     return this.itemsService.update(id, updateCatDto);
//   }

//   @Delete(':id')
//   async remove(@Param('id') id: string): Promise<Item> {
//     console.log('delete controller');
//     return this.itemsService.delete(id);
//   }
}
