import * as dotenv from 'dotenv';
import { IConfig } from './IConfig';

dotenv.config();

const configuration: IConfig = {
  env: process.env.NODE_ENV,
  mongoUrl: process.env.MONGO_URI,
  port: process.env.PORT,
};

Object.freeze(configuration);
export default configuration;
