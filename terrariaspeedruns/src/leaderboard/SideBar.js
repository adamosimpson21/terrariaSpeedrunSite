import React, {Component} from 'react';

class SideBar extends Component{
	render(){
		return(
			<div>
				<br />
				<button onClick={(e) => this.props.handler(e, "Normal")}>Normal</button>
				<button onClick={(e) => this.props.handler(e, "Expert")}>Expert</button>
				<br />
				<br />
				<button onClick={(e) => this.props.handler(e, "Seeded")}>Seeded</button>
				<button onClick={(e) => this.props.handler(e, "Random")}>Random</button>
			</div>
			)
	}
}

export default SideBar;