const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./secrets.js');

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'provide token ◖|◔◡◉|◗' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log('decoded error ->', err);
      return res.status(401).json({ message: 'token no good, bad 【•】_【•】' });
    }

    console.log('decoded token ->', decoded);
    req.decodedJwt = decoded;
    next();
  });
};
