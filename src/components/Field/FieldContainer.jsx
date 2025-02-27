import { useDispatch, useSelector } from 'react-redux';
import { FieldLayout } from './Field';
import { setField, setCurrentPlayer, setGameStatus } from '../../actions/index';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const FieldContainer = () => {
	const dispatch = useDispatch();
	const field = useSelector((state) => state.field);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	const checkWinner = (field) => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	};

	const onCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));

		const winner = checkWinner(newField);
		if (winner) {
			dispatch(setGameStatus(true, false));
			return;
		}

		const isFull = newField.every((cell) => cell !== '');
		if (isFull) {
			dispatch(setGameStatus(true, true));
		} else {
			dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
		}
	};

	return <FieldLayout field={field} onCellClick={onCellClick} />;
};
