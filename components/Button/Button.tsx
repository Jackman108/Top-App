import styles from './Button.module.css';
import { ButtonProps } from './Button props';
import classNames from 'classnames/bind';

const styleNames = classNames.bind(styles);

export const Button = ({ apperance, children, className, ...props }: ButtonProps): JSX.Element => {
	const names = styleNames(styles.button, className, {
		[styles.primary]: apperance == 'primary',
		[styles.ghost]: apperance == 'ghost'
	});

	return (
		<button
			className={names}
			{...props}
		>
			{children}
		</button >
	);
};

