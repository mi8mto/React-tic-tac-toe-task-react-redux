import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Field.module.css';
import { setField } from '../../actions/index';

const FieldLayout = ({ onCellClick }) => {
	const field = useSelector((state) => state.field);
	const dispatch = useDispatch();

	const handleCellClick = (index) => {
		if (field[index] !== '') return;
		onCellClick(index, dispatch);
	};

	return (
		<div className={styles.grid}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ''}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	onCellClick: PropTypes.func.isRequired,
};

export const FieldContainer = ({ onCellClick }) => {
	return <FieldLayout onCellClick={onCellClick} />;
};
