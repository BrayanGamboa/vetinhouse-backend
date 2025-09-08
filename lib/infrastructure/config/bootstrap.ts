import dotenv from "dotenv";
import * as constants from './constants';
import environment from './environment';
import sequelize from '../orm/sequelize/sequelize';

dotenv.config();
export default {

  async init() {
    if (environment.dialect === constants.SUPPORTED_DATABASE.MONGO) {
      import('../orm/mongoose/mongoose');
    }
    if (environment.dialect === constants.SUPPORTED_DATABASE.POSTGRES || environment.dialect === constants.SUPPORTED_DATABASE.SQLITE) {

      try {
        await sequelize.sync();
        // eslint-disable-next-line
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  }
};
