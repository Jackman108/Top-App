import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import classNames from 'classnames/bind';


const styleNames = classNames.bind(styles);

export const Ptag = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element => {

	const styleTagP = styleNames(styles.p, className, {
		[styles.s]: size == 's',
		[styles.m]: size == 'm',
		[styles.l]: size == 'l'
	});
	return (
		<p className={styleTagP}
			{...props}
		>
			{children}
		</p>
	);
};