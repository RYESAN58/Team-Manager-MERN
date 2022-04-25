const playerController = require('../controller/player.controller')
const Player = require('../model/player.model')

module.exports = (app) => {
	app.get('/api', playerController.getAllPlayers)
	app.post('/api', playerController.createPlayer)
	app.delete('/api/:id', playerController.deletePlayer)
}