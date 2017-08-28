const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

//var id = '599dcf019e615b545fce032c11';

//if (!ObjectID.isValid(id)){
//	console.log('ID not valid');
//};
// Todo.find({
	// _id: id
// }).then((todos) => {
	// console.log('Todos', todos);
// });

// Todo.findOne({
	// _id: id
// }).then((todo) => {
	// console.log('Todo', todo);
// });

//Todo.findById(id).then((todo) => {
//	if (!todo) {
//		return console.log('ID not found');
//	}
//	console.log('Todo by ID', todo);
//}).catch((e) => console.log(e));

var id = '599c5870027602b4d37dbb3c';
if (!ObjectID.isValid(id)){
	console.log('ID not valid.');
};
Users.findById(id).then((user) => {
	if (!user) {
		return console.log('Unable to find user.');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));