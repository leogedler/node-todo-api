const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5959b409dff652506f13278f').then((todo)=>{
    console.log(todo);
})
