import { DEPLOYICO_TYPES } from "../actions/deployICOAction";

const initialState = {};

const deployicoReducer = (state = initialState, action) => {
	switch (action.type) {
		case DEPLOYICO_TYPES.DEPLOY_ICO:
			return action.payload;

		default:
			return state;
	}
};

export default deployicoReducer;
