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
const db = client.db(dbName);

module.exports = {
  async create(collectionName, data) {
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(data);
    return result;
  },
  async read(collectionName, query = {}) {
    // Read all from collections
    const collection = db.collection(collectionName);
    let response = await collection.find(query).toArray();
    return response;
  },
  async readById(collectionName, id) {
    // Read all from collections
    const collection = db.collection(collectionName);

    // Create mongodb id
    const _id = new mongodb.ObjectID(id);

    // query
    return await collection.findOne({ _id });
  },
  async update(collectionName, id, data) {
    // Read all from collections
    const collection = db.collection(collectionName);

    // Create mongodb id
    const _id = new mongodb.ObjectID(id);

    // query
    return await collection.updateOne({ _id }, { $set: data });
  },
  async delete(collectionName, id) {
    // Read all from collections
    const collection = db.collection(collectionName);

    // Create mongodb id
    const _id = new mongodb.ObjectID(id);

    // query
    return await collection.deleteOne({ _id });
  },
  async count(collectionName, query, fieldToGroup) {
    // Read all from collections
    const collection = db.collection(collectionName);
    let response = await collection
      .aggregate([
        {
          $match: query,
        },
        {
          $group: { _id: "$" + fieldToGroup, count: { $sum: 1 } },
        },
      ])
      .toArray();
    return response;
  },
};
