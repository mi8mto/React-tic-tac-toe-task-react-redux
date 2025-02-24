import PropTypes from 'prop-types';
import styles from './Field.module.css';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.grid}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => onCellClick(index)}
					disabled={cell !== ''}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array.isRequired,
	onCellClick: PropTypes.func.isRequired,
};
