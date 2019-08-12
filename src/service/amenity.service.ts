import { AmenityType } from './../dto/amenity.dto';
import { Amenity } from './../interface/amenity.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// import { ItemInput } from '../graphql/input/input-items.input';

@Injectable()
export class AmenityService {
  constructor(@InjectModel('Amenity') private amenityModel: Model<Amenity>) {}

  async findAll(): Promise<Amenity[]> {
    return await this.amenityModel.find().exec();
  }

  async create(createAmenitymDto: AmenityType): Promise<Amenity> {
    const createdItem = new this.amenityModel(createAmenitymDto);
    return await createdItem.save();
  }

  //   async findAll(): Promise<Item[]> {
  //     return await this.itemModel.find().exec();
  //   }

  //   async findOne(id: string): Promise<Item> {
  //     return await this.itemModel.findOne({ _id: id });
  //   }

  //   async delete(id: string): Promise<Item> {
  //     return await this.itemModel.findByIdAndRemove(id);
  //   }

  //   async update(id: string, item: Item): Promise<Item> {
  //     return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  //   }
}
