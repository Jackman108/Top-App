import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import classNames from 'classnames/bind';
import { format } from 'date-fns';



export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {

	const styleNames = classNames.bind(styles);
	const styleFooter = styleNames(className, styles.footer);

	return (
		<footer className={styleFooter}{...props}>
			<div>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href="#" target="_blank">Пользовательское соглашение</a>
			<a href="#" target="_blank">Политика конфиденциальности </a>
		</footer>
	);
};