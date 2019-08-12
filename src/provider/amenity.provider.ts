import { Connection } from 'mongoose';
import { amenityModel } from 'src/model/amenity.schema';

export const amenityProvider = [
  {
    provide: 'AMENITY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Amenity', amenityModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
