const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function main() {
    const uri =
    "mongodb+srv://admin:123penguinload@penguins.xye91ai.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect((err) => {
      const collection = client.db('test').collection('devices');
      // perform actions on the collection object
      client.close();
    });

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.createCollection("users", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    });

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myobj = { name: "LKC", email: "lk_c@hotmail.com", is_broker: true };
      dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  }

  main().catch(console.error);