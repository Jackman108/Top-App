import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import classNames from 'classnames/bind';
import { ForwardedRef, forwardRef } from 'react';


const styleNames = classNames.bind(styles);

export const Textarea = forwardRef(({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={styleNames(styles.textareaWrapper, className)}>
			<textarea
				className={styleNames(styles.textarea, {
					[styles.error]: error
				})}
				ref={ref}
				{...props}
			/>
			{error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
		</div>

	);
});