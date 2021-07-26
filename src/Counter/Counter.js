import React, {useState} from 'react';

/**
 * Here is a working counter. Add more features to it:
 * 1. User can't have go below 0
 * 2. User can't go above 20
 * 3. Add another button "increase 10" which will increase the counter by 10 (if it's above limit, then set to the limit)
 */

function Counter() {

	const [num, setNum] = useState(0);

	function increase() {
		setNum(num + 1);
	}

	function decrease() {
		setNum(num - 1);
	}

	return (
		<div>
			<h1>Counter: </h1>
			<button onClick={() => increase()}>Increase</button>
			<button onClick={() => decrease()}>Decrease</button>
			<span>{num}</span>
		</div>
	);
}

export default Counter;























