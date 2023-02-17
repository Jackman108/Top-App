import { HeaderProps } from './Header.props';
import Logo from '../../components/assets/logo.svg';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';

import styles from './Header.module.css';
import classNames from 'classnames/bind';
import { Sidebar } from '../Sidebar/Sidebar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const styleNames = classNames.bind(styles);

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	const [isOpened, setIsOpened] = useState<boolean>(false);

	const router = useRouter();

	useEffect(() => {
		setIsOpened(false);
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%',
		}
	};

	return (
		<header className={styleNames(styles.header, className)} {...props}>
			<Logo />
			<ButtonIcon
				appearance='white'
				icon='menu'
				onClick={() => setIsOpened(true)} />
			<motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				<Sidebar />
				<ButtonIcon
					className={styles.menuCross}
					appearance='white'
					icon='cross'
					onClick={() => setIsOpened(false)} />
			</motion.div>
		</header>
	);
};