import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Leaderboard from './leaderboard/Leaderboard';
import About from './about/About';
import ErrorBoundary from './helper/ErrorHandler'

const App = () => (
	<ErrorBoundary>
		<Router>
			<div>	
				{/* TODO:make more than one route. Probably require assistance as project grows */}
		    	<Route exact path="/" component={Leaderboard} />
		        <Route path="/leaderboard" component={Leaderboard} />
		        <Route path="/discord" component={Leaderboard} />
		        <Route path="/races" component={Leaderboard} />
		        <Route path="/resources" component={Leaderboard} />
		        <Route path="/about" component={About} />
		    </div>
		</Router> 

		{/* Don't forget your error handling! */}
	</ErrorBoundary> 
)


export default App;