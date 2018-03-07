const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove({_id:'5a9eb2df9e23773c60b46640'})//get the doc removed info

//Todo.findByIdAndRemove()//same we get the doc here also
Todo.findByIdAndRemove('5a9eb2df9e23773c60b46640').then((todo) => {
    console.log(todo);
})