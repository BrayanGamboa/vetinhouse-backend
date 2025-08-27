import { DataTypes, Sequelize } from "sequelize";

module.exports = function(sequelize: Sequelize, dataTypes: typeof DataTypes) {
  return sequelize.define('mix_role', {
    id: {
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
      unique: "mix_role_name_uq"
    },
    description: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    info: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    tableName: 'mix_role',
    schema: 'mix',
    timestamps: false,
    indexes: [
      {
        name: "mix_role_name_uq",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "mix_role_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
