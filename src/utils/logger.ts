import { Logger } from './logger.types';
import config from './config';

const info: Logger = (...params) => {
  if (config.NODE_ENV !== 'test') {
    console.log(...params);
  }
};

const error: Logger = (...params) => {
  if (config.NODE_ENV !== 'test') {
    console.log(...params);
  }
};

export default {
  info,
  error
};