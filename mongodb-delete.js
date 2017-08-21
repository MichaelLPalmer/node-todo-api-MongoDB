// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');
	
	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result => {
		// console.log(result);
	// }));
	
	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result => {
		// console.log(result);
	// }));
	
	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result => {
		// console.log(result);
	// }));
	
	//deleteOne by ID
	// db.collection('Users').findOneAndDelete({
		// _id: new ObjectID("5999de271b5f8af67d1f04fc")
	// }).then((results => {
		// console.log(JSON.stringify(results, undefined, 2));
	// }));
	
	db.collection('Users').deleteMany({name: 'Michael Palmer'});
	
	// db.close();
});