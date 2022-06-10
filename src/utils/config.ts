import dotenv from 'dotenv';
import { Port, NodeEnv } from './config.types';
dotenv.config();

const PORT: Port = Number(process.env.PORT) || 4000;
const NODE_ENV: NodeEnv = process.env.NODE_ENV || '';

export default {
  PORT,
  NODE_ENV
};