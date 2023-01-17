const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const uri = process.env.STRING_URI;
const DATABASE = "tools";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
module.exports = {
  client: (callback) => {
    client.connect((err, db) => {
      if (err || !db) {
        return false;
      }
      callback(db.db(DATABASE));
    });
  },
};
