// User model
module.exports = function(sequelize, DataTypes) {
    const RecIng = sequelize.define("RecIng", {
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        measurement: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, { timestamps: false });
    return RecIng;
  };
  