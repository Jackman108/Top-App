import { InputProps } from './Input.props';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import { ForwardedRef, forwardRef } from 'react';

const styleNames = classNames.bind(styles);

export const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<input
			className={styleNames(className, styles.input)}
			ref={ref}
			{...props}
		/>
	);
});