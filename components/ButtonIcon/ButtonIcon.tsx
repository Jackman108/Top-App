import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import classNames from 'classnames/bind';
const styleNames = classNames.bind(styles);


export const ButtonIcon = ({ appearance, icon, className,
	...props }: ButtonIconProps): JSX.Element => {
	const IconComp = icons[icon];

	return (
		<button
			className={styleNames(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.white]: appearance == 'white',
			})}
			{...props}
		>
			<IconComp />
		</button >
	);
};  