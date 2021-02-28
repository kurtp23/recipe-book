// User model
module.exports = function(sequelize, DataTypes) {
    const RecIng = sequelize.define("RecIng", {
        recipeId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredientId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        measurement: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return RecIng;
  };
  