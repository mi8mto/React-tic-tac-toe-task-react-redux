export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';

export const setCurrentPlayer = (player) => ({
	type: SET_CURRENT_PLAYER,
	payload: player,
});
