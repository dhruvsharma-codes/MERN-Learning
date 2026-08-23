const testUser = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test API Executed Successfully",
  });
};
module.exports = { testUser };
