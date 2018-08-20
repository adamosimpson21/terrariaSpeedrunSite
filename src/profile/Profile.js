import React, {Component} from 'react';
import Player from '../innerComponents/Player';
import BackFrame from '../innerComponents/BackFrame';

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
					<Player id={id}/>
				</div>
			)
		} else {
			const player = this.state.player.data;
			//TODO: add more user features and styles
			//TODO: Convert country code to country name. Style names in accordance to Speedrun.com API
			return(
				<div>
					<Player id={id}/>
					{player.location ? <p> Location: {player.location.country.code} </p> : null}
					{player.youtube ? <p> Follow me on youtube! <a href={player.youtube.uri} target="_blank">Youtube!</a></p> : null}
					{player.twitter ? <p> My Twitter <a href={player.twitter.uri} target="_blank">Twitter</a></p> : null}
				</div>
			)
		}		
	}
}

export default BackFrame(Profile);
