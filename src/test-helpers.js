import { MongoClient } from "mongodb";

export const setDatabaseData = async (collectionName, data) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/TESTS_DB`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = client.db("TESTS_DB");

  await db.collection(collectionName).insertMany(data);

  client.close();
};

export const getDatabaseData = async (collectionName) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/TESTS_DB`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = client.db("TESTS_DB");

  const result = await db.collection(collectionName).find().toArray();

  client.close();

  return result;
};

export const resetDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/TESTS_DB`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = client.db("TESTS_DB");

  await db.dropDatabase();

  client.close();
};
