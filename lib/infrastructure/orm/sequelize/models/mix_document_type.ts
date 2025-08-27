import { DataTypes, Sequelize } from "sequelize";

module.exports = function(sequelize: Sequelize, dataTypes: typeof DataTypes) {
  return sequelize.define('mix_document_type', {
    id: {
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
      unique: "master_document_type_name_uq"
    },
    description: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    info: {
      type: dataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'mix_document_type',
    schema: 'mix',
    timestamps: false,
    indexes: [
      {
        name: "master_document_type_name_uq",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "master_document_type_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
