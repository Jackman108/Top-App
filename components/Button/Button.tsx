import styles from './Button.module.css';
import { ButtonProps } from './Button props';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Button = ({ apperance, children }: ButtonProps): JSX.Element => {
	const className = cx(styles.button, {
		[styles.primary]: apperance == 'primary',
		[styles.ghost]: apperance == 'ghost'
	});

	return (
		<button
			className={className}>
			{children}
		</button >
	);
};

