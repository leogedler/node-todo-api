// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // FindOneUpdate
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('59507710de053f0a63b12496')},{
        $set:{
            name: 'Leonardo'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });


    // db.close();
});