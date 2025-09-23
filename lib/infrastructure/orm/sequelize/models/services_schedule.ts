import { DataTypes, Sequelize } from "sequelize";

module.exports = function(sequelize: Sequelize, dataTypes: typeof DataTypes) {
  return sequelize.define('services_schedule', {
    id: {
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    schedule: {
      type: dataTypes.JSON,
      allowNull: false
    },
    info: {
      type: dataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'services_schedule',
    schema: 'services',
    timestamps: false,
    indexes: [
      {
        name: "services_schedule_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
