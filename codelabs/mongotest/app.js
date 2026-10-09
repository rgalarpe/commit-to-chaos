const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:NFQPgdLVHPBKXKbObSVwNWKE@172.21.107.188:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
