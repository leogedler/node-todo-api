// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // DeleteMany
    // db.collection('Users').deleteMany({name: 'Leonardo'}).then((result)=>{
    //     console.log(result);
    // });

    // DeleteOne
    // db.collection('Todos').deleteOne({text: 'Buy groseries'}).then((result)=>{
    //     console.log(result);
    // });

    // FindOneDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5951b1a87c77aaefaf568e27')}).then((result)=>{
        console.log(result);
    });




    // db.close();
});