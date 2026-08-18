const User = require("./userModel.js");
const Company = require("./companyModel.js");
const CompanyProfile = require("./companyProfile.js");

// company has many users
Company.hasMany(User, {
  foreignKey: "companyId",
  as: "users",
});

// user belongs to company
User.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company",
});

// company has one profile
Company.hasOne(CompanyProfile, {
  foreignKey: "companyId",
  as: "profile",
});

// company profile belongs to company
CompanyProfile.belongsTo(Company, {
  foreignKey: "companyId",
  as: "company",
});

module.exports = { User, Company, CompanyProfile };
