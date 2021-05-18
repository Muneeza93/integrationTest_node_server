import { MongoClient } from "mongodb";
require("dotenv").config();

const { DB_TEST } = process.env;

export const getUserByUsername = async (username) => {
  const client = await MongoClient.connect(
    `mongodb://localhost:27017/${DB_TEST}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = client.db(DB_TEST);
  const result = await db.collection("users").findOne({ username });

  client.close();

  return result;
};

export default {
  getUserByUsername,
};
