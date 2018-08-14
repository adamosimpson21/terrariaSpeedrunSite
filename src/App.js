import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Leaderboard from './leaderboard/Leaderboard';
import Discord from './discord/Discord';
import Resources from './resources/Resources';
import About from './about/About';
import Races from './races/Races';
import ErrorBoundary from './helper/ErrorHandler';
import Profile from './profile/Profile';
import './App.css';

const App = () => (
	<ErrorBoundary>
		<Router>
			<div className="App">
		    	<Route exact path="/" component={Leaderboard} />
		        <Route path="/leaderboard" component={Leaderboard} />
		        <Route path="/discord" component={Discord} />
		        <Route path="/races" component={Races} />
		        <Route path="/resources" component={Resources} />
		        <Route path="/about" component={About} />
		        <Route path="/profile/:id" component={Profile} />
		    </div>
		</Router> 

		{/* Don't forget your error handling! */}
	</ErrorBoundary> 
)


export default App;