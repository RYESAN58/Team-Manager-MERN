import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {confirmAlert} from 'react-confirm-alert'

const PLayerList = () => {
	const navigate= useNavigate()
	const [players, setPlayers] = useState([])

	const deletePlayer = (playerID) => {
		axios.delete(`http://localhost:8000/api/${playerID}`)
      .then(res => {
        setPlayers(players.filter(player => player._id != playerID))
		})
			.catch(err => console.log(err))
	}
	useEffect(() => {
		axios
			.get('http://localhost:8000/api')
			.then((response) => {
				console.log(response)
				setPlayers(response.data)
			})
			.catch((err) => console.log(err.response));
}, []);
	return (
		<div>
			<h1>players!</h1>
			<table>
				<tr>
					<th>Players</th>
					<th>Preferred Position</th>
					<th>Actions</th>
				</tr>
				{players.map((player, index) => {
					return(
							<tr key={index}>
								<td>
									{player.playerName}
								</td>
								<td>
									{player.position}
								</td>
								<td>
									<button onClick={(e) => {
                    let x = window.confirm('are you sure ?')
                    if (x){
                      deletePlayer(player._id)
                    }
                    }} style={{backgroundColor: 'red'}}>delete</button>
								</td>
							</tr>
					)
				})}
			</table>
		</div>
	)
}

export default PLayerList;