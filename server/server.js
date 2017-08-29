var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

var {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req,res) => {
	var id = req.params.id;
	if (!ObjectID.isValid(id)){
		console.log('ID not valid.');
		return res.status(404).send();
	};
	Todo.findById(id).then((todo) => {
		if (!todo) {
			console.log('Todo not found.');
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => res.status(400).send());
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});


module.exports = {app};