import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client: MongoClient, clientPromise: Promise<MongoClient>;

if (!uri) {
    throw new Error('Mongo URI is not added to the .env file');
}

client = new MongoClient(uri);
clientPromise = client.connect()

export default clientPromise;