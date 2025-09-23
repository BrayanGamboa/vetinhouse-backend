import { DataTypes, Sequelize } from "sequelize";

module.exports = function(sequelize: Sequelize, dataTypes: typeof DataTypes) {
  return sequelize.define('services_service', {
    id: {
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
      unique: "services_service_name_uq"
    },
    description: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: dataTypes.DOUBLE,
      allowNull: true
    },
    schedule_service_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'services_schedule',
        key: 'id'
      }
    },
    info: {
      type: dataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'services_service',
    schema: 'services',
    timestamps: false,
    indexes: [
      {
        name: "services_service_name_uq",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "services_service_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
