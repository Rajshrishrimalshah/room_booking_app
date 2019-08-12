import { DatabaseModule } from './../config/database/database.module';
import { amenityModel } from './../model/amenity.schema';
import { AmenityService } from './../service/amenity.service';
import { AmenityController } from './../controller/amenity.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { amenityProvider } from 'src/provider/amenity.provider';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Amenity', schema: amenityModel }]),
  ],
  controllers: [AmenityController],
  providers: [AmenityService, ...amenityProvider],
})
export class AmenityModule {}
