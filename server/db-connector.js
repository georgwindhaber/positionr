//  MONGO DB CONNECTION SETTINGS
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";
const dbName = "positionr";
const client = new MongoClient(url);

module.exports = {
  create(collectionName, data) {
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
            // Insert data into existing collection
            const collection = db.collection(collectionName);
            collection.insertOne(data, (e) => {
              console.log("event", e);
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
  read(collectionName, id) {},
  update(collectionName, id, data) {},
  delete(collectionName, id) {},
};
