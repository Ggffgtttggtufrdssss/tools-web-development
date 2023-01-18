import { getPosts, postForms } from "./handlers";

module.exports = (routes) => {
  routes.get("/", getPosts);
};
