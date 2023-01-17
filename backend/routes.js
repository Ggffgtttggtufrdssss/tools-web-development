const { getPosts } = require("./handlers");

module.exports = (routes) => {
  routes.get("/", getPosts);
};
