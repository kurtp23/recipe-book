// Ingerdient model
module.exports = function (sequelize, DataTypes) {
  const Ingredient = sequelize.define("Ingredient", {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // get() {
    //   const ingArr = JSON.parse(ingredient);
    //   console.log(ingArr);
    // },
  });
  return Ingredient;
};
