import React, {Component} from 'react';
import NavBar from '../innerComponents/NavBar';
import RaceList from './RaceList';

class Races extends Component{
	render(){
		return(
		<div className="App">
        	<NavBar />
			<RaceList />
		</div>
		)
	}
}

export default Races;