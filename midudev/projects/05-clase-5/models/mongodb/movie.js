import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
const uri = "http://localhost:27017/test-movie";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function connect() {
  try {
    await client.connect();
    const database = client.db("database");
    return database.collection("movies");
  } catch (error) {
    console.error("Error connecting to the database");
    console.error(error);
    await client.close();
  }
}
export class MovieModel {
  static async getAll({ genre }) {
    const db = await connect();
    if (genre) {
      return db
        .find({
          genre: {
            $elemMatch: {
              $regex: genre,
              $options: "i",
            },
          },
        })
        .toArray();
    }
    return db.find({}).toArray();
  }
}
