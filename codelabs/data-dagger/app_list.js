const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:EKGCXBqEl8q7piD1Nx0P4lgY@172.21.244.208:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })
