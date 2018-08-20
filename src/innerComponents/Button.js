import React from 'react';
import './Button.css';

const Button = ({label, handleClick}) => (
	<button 
		className="buttonHOC"
		onClick={handleClick}>
		{label}
	</button>
)

export default Button;