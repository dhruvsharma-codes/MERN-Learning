const User = require("./userModel.js");
const Company = require("./companyModel.js");

// company has many users
Company.hasMany(User, {
  foreignKey: "companyId",
  as: "users",
});

// user has one company
User.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company",
});
module.exports = { User, Company };
