import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { id, title, address, description, image } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://pablo:pablo@cluster0.yheg8r7.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;
