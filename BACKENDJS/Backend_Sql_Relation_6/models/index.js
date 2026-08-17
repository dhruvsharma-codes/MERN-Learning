const User = require("./userModel.js");
const Company = require("./companyModel.js");

// hasMany
Company.hasMany(User,{
    foreignKey:"companyId",
    as:"users"
});

module.exports = { User, Company };