import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';
import classNames from 'classnames/bind';

const styleNames = classNames.bind(styles);

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return (
		<hr className={styleNames(className, styles.hr)} {...props} />
	);
};