import jwt from "jsonwebtoken";

const cookieJwtAuth = (req, res, next) => {
  const token = req.headers.cookie?.split("=")[1];
  try {
    const userId = jwt.verify(token, process.env.MY_SECRET);
    req.userId = userId;
    next();
  } catch (err) {
    res.redirect("http://localhost:3000/account");
    res.json({ error1: err });
  }
};

export default cookieJwtAuth;
