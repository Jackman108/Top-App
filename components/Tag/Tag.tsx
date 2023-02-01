import { TagProps } from './Tag.props';
import classNames from 'classnames/bind';
import styles from './Tag.module.css';


const styleNames = classNames.bind(styles);

export const Tag = ({ size = 'm', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {

	const styleTag = styleNames(styles.tag, className, {
		[styles.s]: size == 's',
		[styles.m]: size == 'm',
		[styles.ghost]: color == 'ghost',
		[styles.red]: color == 'red',
		[styles.grey]: color == 'grey',
		[styles.green]: color == 'green',
		[styles.primary]: color == 'primary',
	});
	return (
		<div className={styleTag}
			{...props}
		>
			{
				href ? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};