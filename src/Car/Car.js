import React from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

function Car() {
	return (
		<div>
			<h1>Choose a color for your car:</h1>
			<select>
				<option value="silver">silver</option>
				<option value="red">red</option>
				<option value="blue">blue</option>
				<option value="yellow">yellow</option>
				<option value="green">green</option>
			</select>
			<br />
			<br />
			<div className="Car-color">Color example</div>
		</div>
	);
}

export default Car;