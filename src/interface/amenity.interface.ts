import { Document } from 'mongoose';

export interface Amenity extends Document {
    readonly amenityName: string;
    readonly iconValue: string;
}
