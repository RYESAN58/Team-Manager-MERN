import React , {useState, useEffect}from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreatePlayer = () => {
  const[playerError, setPlayerError] = useState('')
  const[playerPosError, setPlayerPosError] = useState('')
	const [playerName , setPlayerName] = useState('')
	const [position, setPlayerPosition] = useState('')
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate()
  const [style , setStyle] = useState({
    display: 'none',
    width: '100px',
    margin: 'auto',
    backgroundColor: 'green'
  })
  
	
	
	const handleName = (e) => {
    if(e.target.value.length < 3){
      setPlayerError('PLayer name is required or needs to be more than 3 characters')
      setStyle({
        display: "none",
        width: '100px',
        margin: 'auto'
      })
    }else{
      setPlayerError('')
      setPlayerName(e.target.value)
      setStyle({display: "inline"})
    }
	}

	const handlePosition = (e) => {
    if(e.target.value.length < 2){
      setPlayerPosError('Position required ')
      setStyle({display: "none"})
    }else{
      setPlayerPosError('')
      setPlayerPosition(e.target.value)
      setStyle({display: "inline"})
    }
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8000/api/', {
			playerName,
			position,
		})
			.then((res)=>{
				console.log('Success', res)
				navigate('/')
			})
			.catch((err) => {
				console.log('ERROR!', err.response);
				setErrors(err.response.data.errors)
				})
	}
	return(
		<div onSubmit={onSubmitHandler}>
			<h1>Add Players</h1>
			<form>
			{errors &&
				Object.keys(errors).map((errKey, index) => {
					return(<p style={{color: "red"}} key= {index}>{errors[errKey].message}</p>)
			})}
				<label>Player's Name</label>
				<input type="text" onChange={handleName}></input>
        {
          playerError ? 
          <p style={{color:'red'}}>{playerError}</p>:
          ''
        }
				<br></br>
				<label>Player's Position</label>
				<input type="text" onChange={handlePosition}></input>
				{
          playerPosError ? 
          <p style={{color:'red'}}>{playerPosError}</p>:
          ''
        }
        <br></br>
				<button type="submit" style={style}>Submit</button>
			</form>
		</div>
	)

}


export default CreatePlayer;