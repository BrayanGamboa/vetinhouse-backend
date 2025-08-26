import { Sequelize } from 'sequelize';
import environment from '../../config/environment';
import { initUserModel } from './models/User';

const sequelize = new Sequelize(environment.uri);

// Inicializar modelos
initUserModel(sequelize);

export default sequelize;