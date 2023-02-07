import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from '../../components/assets/logo.svg';
import classNames from 'classnames/bind';


const styleNames = classNames.bind(styles);

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={styleNames(className, styles.sidebar)}  {...props}>
			<Logo className={styles.logo} />
			<div>Search</div>
			<Menu />
		</div>
	);
};