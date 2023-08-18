import User from "../model/userModel.mjs";
import bcrypt from "bcrypt"

// export const signupAccount = async (req, res) => {
//   const { email, password } = req.body;
//   const response = await User.findOne({email})
//   if(response){
//     const newUser = new User({
//       email,
//       password: md5(password),
//     });
//     newUser
//       .save()
//       .then(() => {
//         res.status(200).json({ message: "account successfully created!!!" });
//       })
//       .catch((error) => {
//         res.status(500).json({ error: error.message });
//       });
//   } else {
//     res.status(200).json({message: "Email address exist!!!"})
//   }
// };

// export const loginAccount = (req, res) => {
//   const { email, password } = req.body;
//   User.findOne({ email })
//     .then((doc) => {
//       if (doc.password === md5(password)) {
//         res.status(200).json({ message: "account sucessfully logged in" });
//       } else {
//         res.status(400).json({ message: "account not found hahahahh" });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message });
//     });
// };
