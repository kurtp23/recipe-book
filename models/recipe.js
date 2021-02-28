// Recipe model
module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
            get() {
                const rawValue = this.getDataValue("instructions");
                return JSON.parse(rawValue);
            },
            set(value) {
                this.setDataValue("instructions", JSON.stringify(value));
            }
        }
    });
    Recipe.associate = (db) => {
        Recipe.belongsToMany(db.Ingredient, {through: "recIngs"})
    }
    return Recipe;
};
  