import sequelize from "../sequelize";
import initModels from "../models/init-models";

const {
  auth_user,
  mix_document_type,
  mix_role,
} = initModels(sequelize);

export default {
  auth_user,
  mix_document_type,
  mix_role,
};