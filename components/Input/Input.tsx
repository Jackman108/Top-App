import { InputProps } from './Input.props';
import styles from './Input.module.css';
import classNames from 'classnames/bind';

const styleNames = classNames.bind(styles);

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
	return (
		<input className={styleNames(className, styles.input)}
			{...props}
		/>
	);
};