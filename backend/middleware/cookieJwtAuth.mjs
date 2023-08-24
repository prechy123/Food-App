import jwt from "jsonwebtoken";

const cookieJwtAuth = (req, res, next) => {
  let token = req?.cookies?.token;
  if (token === undefined) {
    token = req.body.token;
  }

  try {
    const user = jwt.verify(token, process.env.MY_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    res.redirect("http://localhost:3000/account");
  }
};
export default cookieJwtAuth;
