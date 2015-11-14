module.exports = {
  port: process.env.PORT || 9090,
  mongoURI: process.env.MONGO_URI,
  secret: process.env.SESSION_SECRET
};
