import * as mongoose from 'mongoose';

export const amenityModel = new mongoose.Schema({
  amenityName: String,
  iconValue: String,
});
