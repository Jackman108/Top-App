import { CardProps } from './Card.props';
import styles from './Card.module.css';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';


const styleNames = classNames.bind(styles);

export const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: forwardRef<HTMLDivElement>): JSX.Element => {
	return (
		<div className={styleNames(styles.card, className, {
			[styles.blue]: color == 'blue'
		})}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	);
});