const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ahshi:<password>@cluster0-uhm8k.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient.connect(uri, { useNewUrlParser: true }, function(err,client)
{
  const collection = client.db("Ahshi").collection("web");
console.log("conected");
  // perform actions on the collection object
 var ins={name:'Teddy',email:'Teddy@gmail.com',mobile:'1234567890',city:'Coimbatore'}
 
 collection.insertOne(ins,function(err,res){
     console.log("data inserted");
 });
    
  client.close();
});