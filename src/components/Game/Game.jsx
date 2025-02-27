// components/Game/Game.jsx
import { useDispatch } from 'react-redux';
import { FieldContainer } from '../Field/FieldContainer';
import { InformationContainer } from '../Information/Information';
import styles from './Game.module.css';
import { restartGame } from '../../actions/index';

export const Game = () => {
	const dispatch = useDispatch();

	const onReset = () => {
		dispatch(restartGame());
	};

	return (
		<div className={styles.game}>
			<InformationContainer />
			<FieldContainer />
			<button className={styles.resetButton} onClick={onReset}>
				Начать заново
			</button>
		</div>
	);
};
