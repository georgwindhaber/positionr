//  MONGO DB CONNECTION SETTINGS
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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
    return result;
  },
  async read(collectionName, query = {}) {
    // Connect to db
    const db = client.db(dbName);

    // Read all from collections
    const collection = db.collection(collectionName);
    let response = await collection.find(query).toArray();
    console.log("Response", response);
    return response;
  },
  async readById(collectionName, id) {
    // Connect to db
    const db = client.db(dbName);

    // Read all from collections
    const collection = db.collection(collectionName);

    // Create mongodb id
    const _id = new mongodb.ObjectID(id);

    // query
    return await collection.findOne({ _id });
  },
  update(collectionName, id, data) {},
  delete(collectionName, id) {},
};
