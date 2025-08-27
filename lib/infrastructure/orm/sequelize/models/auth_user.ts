import { DataTypes, Sequelize } from "sequelize";

module.exports = function(sequelize: Sequelize, dataTypes: typeof DataTypes) {
  return sequelize.define('auth_user', {
    document: {
      type: dataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mix_role',
        key: 'id'
      }
    },
    document_type_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mix_document_type',
        key: 'id'
      }
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    last_name: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: dataTypes.STRING(255),
      allowNull: false,
      unique: "auth_user_email_uq"
    },
    password: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    info: {
      type: dataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'auth_user',
    schema: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "auth_user_email_uq",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "auth_user_pk",
        unique: true,
        fields: [
          { name: "document" },
        ]
      },
    ]
  });
};
