import jwt from "jsonwebtoken";

const cookieJwtAuth = (req, res, next) => {
  let token = req?.body?.token;
  // if (token === undefined) {
  //   token = req.cookies.token
  // }
  // try {
  if (token === undefined) {
    req.user = "no token";
    next();
  } else {
    const user = jwt.verify(token, process.env.MY_SECRET);
    req.user = user;
    next();
  }
  // } catch (err) {
  //   res.clearCookie("token");
  // }
};
export default cookieJwtAuth;
