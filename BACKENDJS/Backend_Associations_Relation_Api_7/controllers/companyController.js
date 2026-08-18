const { Company } = require("../models/index.js");

const createCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(404).json({
        status: false,
        message: "Company Name is Required",
      });
    }
    const company = await Company.create({
      companyName,
    });
    res.status(201).json({
      status: true,
      message: "Company created successfully",
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to create company",
      error: error.message,
    });
  }
};
module.exports = { createCompany };
