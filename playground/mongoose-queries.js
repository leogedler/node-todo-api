const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// let id = '59559fa8e3e891cc1f533c5a11';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=> console.log(e));

let id = '59544bdfe92f4079fc912ca3';

User.findById(id).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User by Id', user);
}).catch((e)=> console.log(e));
