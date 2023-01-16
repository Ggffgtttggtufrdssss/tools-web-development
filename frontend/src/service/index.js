import axios from "axios";

export function getPosts() {
  return new Promise((resolve) => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => res.status === 200 && res.data)
      .then(resolve)
      .catch(console.error);
  });
}
