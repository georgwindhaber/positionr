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
    console.log(result.result.ok)
  },
  read(collectionName) {
    console.log(collectionName);
    client.connect((err) => {
      if (err) {
        console.error("ERROR:", err);
        return;
      }

      // Connect to db
      const db = client.db(dbName);

      // Check if collection exists
      db.listCollections()
        .toArray()
        .then((collections) => {
          const existingCollection = collections.find(
            (collection) => collection.name == collectionName
          );

          // CASE: Collection exists
          if (existingCollection) {
            //
            // Read all from collections
            //
            const collection = db.collection(collectionName);
            collection.find({}, (err, result) => {
              console.log(result);
            });
          } else {
            // CASE: Collection does not exist (error)
            console.error(
              `ERROR: collection "${collectionName}" does not exist in the database ${dbName}`
            );
          }
          client.close();
        });
    });
  },
  update(collectionName, id, data) {},
  delete(collectionName, id) {},
};
