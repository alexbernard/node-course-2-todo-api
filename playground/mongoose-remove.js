const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a8f1ce1aef27c0c430501c7'}).then((todo) => {
    console.log(todo);
})

Todo.findByIdAndRemove('5a8f1ce1aef27c0c430501c7').then((todo) => {
    console.log(todo);
});