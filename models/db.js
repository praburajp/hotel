var MongoClient = require('mongodb').MongoClient;
/*
mongoose.connect('mongodb://localhost:27017/EmployeeDB'), {useNewUrlParser: true}, (err)=>{});
    if(!err) {console.log('MongoDB Connection Succeded')}
});

require('./employee.model');*/

var url = "mongodb://localhost:27017/EmployeeDB";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
