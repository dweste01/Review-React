/***** CONSTANTS *****/
const SET_MAMMAL = 'SET_MAMMAL'
const SET_FISH = 'SET_FISH'
const SET_BIRD = 'SET_BIRD'


const initialState = {
    selectedMammal : "Tiger",
    selectedBird : "Eagle",
    selectedFish : "Seahorse",
    mammals: ['Tiger', 'Panda', 'Pig'],
    birds: ['Eagle', 'Flamingo', 'Penguin'],
    fish: [ 'Seahorse', 'Octopus', 'Stingray']
};

// make sure you understand the parameters here!
	// with any reducer we expect 2 arguments
	// we are able to give a default value to a parameter in the way seen below
export default (state = initialState, action) => {
	switch(action.type) {
		case SET_MAMMAL:
			return Object.assign({}, state, {'selectedMammal': action.animal})
		case SET_FISH:
			return Object.assign({}, state, {'selectedFish': action.animal})
		case SET_BIRD:
			return Object.assign({}, state, {'selectedBird': action.animal})

		default: return state;
	}
	return state;
};
