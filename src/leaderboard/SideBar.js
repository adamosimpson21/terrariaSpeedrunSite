import React, {Component} from 'react';
import './SideBar.css'

class SideBar extends Component{
	render(){
		return(
			<div className="sideBar">
				<br />
				<button className="variableButton" onClick={(e) => this.props.handler(e, "Normal")}>Normal</button>
				<button className="variableButton" onClick={(e) => this.props.handler(e, "Expert")}>Expert</button>
				<br />
				<br />
				<button className="variableButton" onClick={(e) => this.props.handler(e, "Seeded")}>Seeded</button>
				<button className="variableButton" onClick={(e) => this.props.handler(e, "Random")}>Random</button>
				<br />
				<br />
				<button className="variableButton" onClick={(e) => this.props.handler(e, "Moon Lord")}>Moon Lord</button>
				<button className="variableButton" onClick={(e) => this.props.handler(e, "Night's Edge")}>Night's Edge</button>
				<button className="variableButton" onClick={(e) => this.props.handler(e, "All Bosses")}>All Bosses</button>
				<button className="variableButton" onClick={(e) => this.props.handler(e, "All Pre-HM Bosses")}>All Pre-HM Bosses</button>
			</div>
			)
	}
}

export default SideBar;