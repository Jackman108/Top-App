import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import classNames from 'classnames/bind';
import ArrowIcon from '../assets/arrow.svg';


const styleNames = classNames.bind(styles);

export const Button = ({ appearance: appearance, arrow = 'none', children, className,
	...props }: ButtonProps): JSX.Element => {

	const styleButton = styleNames(styles.button, className, {
		[styles.primary]: appearance == 'primary',
		[styles.ghost]: appearance == 'ghost'
	});
	const styleArrow = styleNames(styles.arrow, {
		[styles.down]: arrow == 'down'
	});

	return (
		<button
			className={styleButton}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={styleArrow}>
				<ArrowIcon />
			</span>}
		</button >
	);
};  