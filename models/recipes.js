// Recipe model
module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
  
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      instructions: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }
    });
    return Recipe;
  };
  