import { getPosts } from "./handlers";

module.exports = (routes) => {
  routes.get("/", getPosts);
};
