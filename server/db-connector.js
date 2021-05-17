//  MONGO DB CONNECTION SETTINGS
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";
const dbName = "positionr";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect();

module.exports = {
  async create(collectionName, data) {
    // Connect to db
    const db = client.db(dbName);

    const collection = db.collection(collectionName);
    const result = await collection.insertOne(data);
    console.log(result.result.ok);
  },
  async read(collectionName) {
    // Connect to db
    const db = client.db(dbName);

    // Read all from collections
    const collection = db.collection(collectionName);
    return collection.find({}).toArray()
  },
  update(collectionName, id, data) {},
  delete(collectionName, id) {},
};
