import constants from './constants';
import dotenv from "dotenv";
dotenv.config();

export default (() => {

  const environment = {
    uri: process.env.DATABASE_URI || '',
    dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
  };

  if (process.env.NODE_ENV === 'test') {
    environment.uri = '';
    environment.dialect = constants.SUPPORTED_DATABASE.SQLITE || '';
  }

  return environment;
})();
