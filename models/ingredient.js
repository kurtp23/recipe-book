// Ingerdient model
module.exports = function(sequelize, DataTypes) {
    const Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    });
    Ingredient.associate = (db) => {
        Ingredient.belongsToMany(db.Recipe, {through: "recIngs"})
    }
    return Ingredient;
};
  