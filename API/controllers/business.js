import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { MongoClient } = require("mongodb");
import { credentials } from "../database_credentials.js";

async function main() {
  const uri = credentials();

  const client = new MongoClient(uri);

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
}

export const getBusiness = async (req, res) => {
  const client = await main();
  console.log(req.query);

  if ("id" in req.query) {
    console.log("id");
    const foundBusiness = await client
      .db("Booky")
      .collection("booky_business")
      .find(req.query, { sort: { name: 1 } });
    res.send(foundBusiness);
  }
  if ("title" in req.query) {
    console.log("title");
    const foundBusiness = await client
      .db("Booky")
      .collection("booky_Business")
      .find(req.query, { sort: { title: 1 } });
    res.send(foundBusiness);
  }
  if (Object.keys(req.query).length === 0) {
    console.log("empty");
    const allBusiness = await client.db("Booky").collection("booky_business").findOne();
    console.log(allBusiness);
    res.send(allBusiness);
  }

  await client.close();
};
export const createBusiness = async (req, res) => {
  const client = await main();
  console.log(req.body);
  await client.db("Booky").collection("booky_business").insertOne(req.body);
  res.send(req.body);
  await client.close();
};
export const updateBusiness = async (req, res) => {
  const client = await main();
  console.log("working");
  res.send("booky_business: get");
  await client.close();
};
