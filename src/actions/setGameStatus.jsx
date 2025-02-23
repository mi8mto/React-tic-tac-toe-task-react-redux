export const SET_GAME_STATUS = 'SET_GAME_STATUS';

export const setGameStatus = (isGameEnded, isDraw) => ({
	type: SET_GAME_STATUS,
	payload: { isGameEnded, isDraw },
});
