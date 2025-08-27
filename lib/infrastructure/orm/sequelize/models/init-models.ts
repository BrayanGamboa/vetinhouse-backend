import { DataTypes, Sequelize } from "sequelize";

var _auth_user = require("./auth_user");
var _mix_document_type = require("./mix_document_type");
var _mix_role = require("./mix_role");

function initModels(sequelize: Sequelize) {
  var auth_user = _auth_user(sequelize, DataTypes);
  var mix_document_type = _mix_document_type(sequelize, DataTypes);
  var mix_role = _mix_role(sequelize, DataTypes);

  auth_user.belongsTo(mix_document_type, { as: "document_type", foreignKey: "document_type_id"});
  mix_document_type.hasMany(auth_user, { as: "auth_users", foreignKey: "document_type_id"});
  auth_user.belongsTo(mix_role, { as: "role", foreignKey: "role_id"});
  mix_role.hasMany(auth_user, { as: "auth_users", foreignKey: "role_id"});

  return {
    auth_user,
    mix_document_type,
    mix_role,
  };
}
export default initModels;
