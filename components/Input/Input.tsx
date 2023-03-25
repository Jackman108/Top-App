import { InputProps } from './Input.props';
import styles from './Input.module.css';
import classNames from 'classnames/bind';
import { ForwardedRef, forwardRef } from 'react';

const styleNames = classNames.bind(styles);

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={styleNames(className, styles.inputWrapper)}>
			<input
				className={styleNames(className, styles.input, {
					[styles.error]: error
				})}
				ref={ref}
				{...props}
			/>
			{error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
		</div>

	);
});