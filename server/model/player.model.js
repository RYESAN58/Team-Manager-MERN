const mongoose = require('mongoose')



const PlayerSchema = new mongoose.Schema({
	playerName: {
	type: String,
	required: [true, 'Must have a name!!'],
	minLength: [3, 'Must be more than 2 characthers!']
},
	position: {
		type: String,
		required: [true, "Must play a position " ]
	}
}, {timestamps : true})

module.exports = mongoose.model('Authors', PlayerSchema)