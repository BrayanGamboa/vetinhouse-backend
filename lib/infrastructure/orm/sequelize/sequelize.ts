import { Sequelize } from 'sequelize';
import environment from '../../config/environment';

const sequelize = new Sequelize(environment.uri);

export default sequelize;