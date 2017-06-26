// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('595074e052b6730a1892b629')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unabel to fetch todos', err);
    // });
    
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count ${count}`);
    // },(err)=>{
    //     console.log('Unabel to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Leonardo'
    }).toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log('Unabel to fetch users', err);
    });

    // db.close();
});