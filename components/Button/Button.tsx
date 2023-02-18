import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import classNames from 'classnames/bind';
import ArrowIcon from '../assets/arrow.svg';
import { motion } from 'framer-motion';



const styleNames = classNames.bind(styles);

export const Button = ({ appearance: appearance, arrow = 'none', children, className,
	...props }: ButtonProps): JSX.Element => {

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={styleNames(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={styleNames(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ArrowIcon />
			</span>}
		</motion.button >
	);
};  