const User = require("./userModel.js");
const Company = require("./companyModel.js");
const CompanyProfile = require("./companyProfile.js");

// hasMany
Company.hasMany(User,{
    foreignKey:"companyId",
    as:"users"
});

Company.hasOne(CompanyProfile,{
    foreignKey:"companyId",
    as:"profile"
});

module.exports = { User, Company, CompanyProfile };