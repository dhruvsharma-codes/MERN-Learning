const getHome = (req,res) => {
res.status(200).json({
    message:"Data Fetched Successfully.",
    status:true,
});
};

const getTest = (req,res) => {
res.status(200).json({
    message:"Test Api Running Successfully",
    status:true,
});
};

module.exports = {getHome,getTest};