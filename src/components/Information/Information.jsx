import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './Information.module.css';

const InformationLayout = ({ status }) => {
	return <div className={styles.status}>{status}</div>;
};

export const InformationContainer = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	const status = useMemo(() => {
		let statusMessage = '';

		if (isDraw) {
			statusMessage = 'Ничья';
		} else if (isGameEnded) {
			statusMessage = `Победа: ${currentPlayer} !`;
		} else {
			statusMessage = `Ходит: "${currentPlayer}"`;
		}

		return statusMessage;
	}, [currentPlayer, isGameEnded, isDraw]);

	return <InformationLayout status={status} />;
};
