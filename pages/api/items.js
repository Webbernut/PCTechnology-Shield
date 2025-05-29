import { MongoClient } from "mongodb";

export default async function handler(req,res){
  if(req.method == "GET"){
    const client = new MongoClient(process.env.REACT_APP_MONGO_URI)
      
    try{
        await client.connect();
      const catalogDb = client.db("itemsData");
      const catalogCollection = catalogDb.collection("items");
      const itemsData = await catalogCollection.find({}).toArray();
      res.status(200).json(itemsData)
    }
    catch(err){
      res.status(500).json({error: `${err}`})
    }
    finally{
      await client.close()
    }
  }
  else{
    res.status(405).json({message: "Method not find"})
  }
}