const asyncHandler = require("express-async-handler");
const userClientModel = require("../models/users/userdataclient");
const userWorkerModel = require("../models/users/userdataworker");
const generateToken = require("../config/generateToken");

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await ( userClientModel.find(keyword).find({ _id: { $ne: req.user._id } })  &&  userWorkerModel.find(keyword).find({ _id: { $ne: req.user._id } })  );
  res.send(users);
});

// const authUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
  
//     const user = await (userClientModel.findOne({ email }) || userWorkerModel.findOne({email}))
  
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         pic: user.pic,
//         token: generateToken(user._id),
//       });
//       console.log(token)
//     } else {
//       res.status(401);
//       throw new Error("Invalid Email or Password");
//     }
//   });

module.exports = { allUsers };