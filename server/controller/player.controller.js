const { response, request } = require('express');
const Player = require('../model/player.model')

module.exports = { 
	createPlayer: (request, response) => {
		Player.create(request.body)
			.then(player => response.json(player))
			.catch(err => response.status(400).json(err))
	},
	getAllPlayers: (request, response) => {
		Player.find({})
			.then( allPLayers => {
				console.log(allPLayers)
				response.json(allPLayers)
			})
			.catch((err)=> {
				console.log(err)
				response.json(err)
			})
	},
	deletePlayer: (request, response)=> {
		Player.deleteOne({_id: request.params.id})
		.then(deleteConfirmation => response.json(deleteConfirmation))
		.catch(err => response.json(err))
	}
}