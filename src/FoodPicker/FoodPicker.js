import React from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

function FoodPicker() {
	return (
		<div>
			<h1>Order special meal:</h1>
			<div>
				Your name:
				<input type="text" />
			</div>
			<div>
				Choose restaurant:
				<select>
					<option value="Frangelico">Frangelico</option>
					<option value="Mina Tomei">Mina Tomei</option>
					<option value="Rak Basar">Rak Basar</option>
					<option value="Texas BBQ">Texas BBQ</option>
				</select>
			</div>
			<div>
				Favorite meal:
				<input type="text" />
			</div>
			<div>
				Want a desert?
				<input type="checkbox" />
			</div>

			<div>
				<h2>Your reservation:</h2>
				Hi [NAME]! <br />
				We are glad you want to reserve a table at [RESTAURANT].<br />
				We will make sure that your favorite meal, [MEAL] is available.<br />
				Additionally, our chef will make a special desert for you!<br />
			</div>
		</div>
	);
}

export default FoodPicker;