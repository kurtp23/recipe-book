// User model
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    User.associate = (db) => {
        User.hasMany(db.Recipe, {foreignKey: "authorId"});
    }
  return User;
};
