import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import classNames from 'classnames/bind';
import { ForwardedRef, forwardRef } from 'react';

const styleNames = classNames.bind(styles);

export const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<textarea
			className={styleNames(className, styles.input)}
			ref={ref}
			{...props}
		/>
	);
});