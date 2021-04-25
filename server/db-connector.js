//  MONGO DB CONNECTION SETTINGS
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";
const dbName = "positionr";
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function (err) {
  assert.strictEqual(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const collection = db.collection("positions");

  collection.find({}).toArray((err, docs) => {
    assert.strictEqual(err, null);
    console.log(docs);
  });

  client.close();
});

export default {
  create(collectionName, data) {
    client.connect((err) => {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      collection.insert(data);

      client.close();
    });
  },
  read(collectionName, id) {},
  update(collectionName, id, data) {},
  delete(collectionName, id) {},
};
