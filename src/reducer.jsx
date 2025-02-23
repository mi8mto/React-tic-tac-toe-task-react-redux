import {
	SET_FIELD,
	SET_CURRENT_PLAYER,
	SET_GAME_STATUS,
	RESTART_GAME,
} from './actions/index';

const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FIELD:
			return { ...state, field: action.payload };
		case SET_CURRENT_PLAYER:
			return { ...state, currentPlayer: action.payload };
		case SET_GAME_STATUS:
			return {
				...state,
				isGameEnded: action.payload.isGameEnded,
				isDraw: action.payload.isDraw,
			};
		case RESTART_GAME:
			return { ...initialState };
		default:
			return state;
	}
};
