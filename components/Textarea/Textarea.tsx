import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import classNames from 'classnames/bind';

const styleNames = classNames.bind(styles);

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
	return (
		<textarea className={styleNames(className, styles.input)}
			{...props}
		/>
	);
};