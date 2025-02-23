import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styles from './Information.module.css';

const InformationLayout = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

	// Мемоизируем объект, чтобы избежать его создания при каждом рендере
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
	}, [currentPlayer, isGameEnded, isDraw]); // Мемоизация зависит от этих значений

	return <div className={styles.status}>{status}</div>;
};

export const InformationContainer = () => {
	return <InformationLayout />;
};
