const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ msg: "No token, access denied" });
    }
    // Expecting "Bearer [token]"
    const token2 = token.split(" ")[1];
    if (!token2) {
      return res.status(401).json({ msg: "No token after Bearer, access denied" });
    }

    const verified = jwt.verify(token2, process.env.JWT_SECRET); // Use env var for JWT secret
    if (!verified) {
      return res.status(401).json({ msg: "Token verification failed, authorization denied" });
    }

    // since the token was made out of the document id
    req.user = { id: verified.id };
    console.log("Verified User ID:", verified.id); // Inside your auth middleware
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
