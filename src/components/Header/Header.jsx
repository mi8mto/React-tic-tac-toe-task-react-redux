import { useState, useEffect } from 'react';
import logo from './../../assets/logo-name.svg';
import styles from './Header.module.css';

export const Header = () => {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={styles.header}>
			<img src={logo} alt={'Result'} />
			<h3>Tic-Tac-Toe-react-redux</h3>
			<span>Время сейчас: {now.toLocaleTimeString()}</span>
		</div>
	);
};
