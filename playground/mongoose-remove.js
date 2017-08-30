const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
	// console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findByIdAndRemove
// Todo.findOneAndRemove({_id: '59a6c4ee330a6906dd9a61bf'}).then((todo) => {
	// console.log(todo);
// });

Todo.findByIdAndRemove('59a6c4ee330a6906dd9a61bf').then((todo) => {
	console.log(todo);
});