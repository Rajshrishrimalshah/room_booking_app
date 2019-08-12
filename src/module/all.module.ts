import { AmenityModule } from './amenity.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AmenityModule],
})
export class AllModules {}
