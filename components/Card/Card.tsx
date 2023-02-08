import { CardProps } from './Card.props';
import styles from './Card.module.css';
import classNames from 'classnames/bind';


const styleNames = classNames.bind(styles);

export const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
	return (
		<div className={styleNames(styles.card, className, {
			[styles.blue]: color == 'blue'
		})}
			{...props}
		>
			{children}
		</div>
	);
};