import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
const uri = "http://localhost:27017/test-movie";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
