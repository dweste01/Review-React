import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default function AnimalSelect ({animals, submitAnimal}) {
	return (
		<form>
			<label for='animalSelect'>Select an Animal: </label>
			<select id='animalSelect' onChange={(e) => submitAnimal(e.target.value)}>
			{ animals.map(a => {
					return <option key={a} value={a}> {a} </option>
				})
			}
			</select>
		</form>
		)

};

