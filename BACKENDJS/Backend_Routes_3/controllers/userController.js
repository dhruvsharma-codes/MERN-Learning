const getHome = (req,res) => {
    res.status(200).json({
        message:"Data fetched Successfully",
        status:true,
    });
};

const getUser = (req,res) => {
    res.status(200).json({
        message:"Data fetched Successfully",
        status:true,
        user:{
            name:"dhruv",
            email:"dhruvsharma123@gmail.com"
        }
    });
};

module.exports = { getHome, getUser };