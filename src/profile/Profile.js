import React, {Component} from 'react';
import NavBar from '../innerComponents/NavBar';
import Player from '../innerComponents/Player';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state={
			player:{}
		}
	}

	componentDidMount(){
	  this.loadPlayer(this.props.match.params.id);
	}

	loadPlayer(id){
		fetch("https://www.speedrun.com/api/v1/users/"+id)
	    .then(resp=>{
		    if(!resp.ok){
		        if(resp.status>=400 && resp.status <500){
		          	return resp.json().then(data=> {
			            let err= {errorMessage:data.message};
			            throw err;
		         	})
		        } else {
			        let err = {errorMessage: 'Please try again later. Server down'};
			        throw err
	        	}
		    }
		    return resp.json();
	    })
	    .then(data => {
	    	this.setState({player:data});
	    	console.log(data);
	    })
	}

	render(){
		const {id} = this.props.match.params;
		if(Object.keys(this.state.player).length === 0 ){
			return(
				<div>
					<NavBar />
					<Player id={id}/>
				</div>
			)
		} else {
			const player = this.state.player.data;
			return(
				<div>
					<NavBar />
					<Player id={id}/>
					<p> Location: {player.location.country.code} </p>
					<p> Follow me on youtube! <a href={player.youtube.uri} target="_blank">Youtube!</a></p>
				</div>
			)
		}		
	}
}

export default Profile;