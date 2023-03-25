import styles from './Menu.module.css';
import classNames from 'classnames/bind';
import { AppContext } from '@/context/app.context';
import { KeyboardEvent, useContext } from 'react';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/helpers/helpers';
import { motion } from 'framer-motion';

const sn = classNames.bind(styles);

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: { marginBottom: 0 }
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 29
		},
		hidden: { opacity: 0, height: 0 }
	};

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			openSecondLevel(secondCategory);
		}
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(m => (
					<li key={m.route}>
						<Link href={`/${m.route}`}>

							<div className={sn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>

						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<li key={m._id.secondCategory}>
							<button
								tabIndex={0}
								onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</button>
							<motion.ul
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={sn(styles.secondLevelBlock)}>

								{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
							</motion.ul>
						</li>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return (
			pages.map(p => (
				<motion.li
					key={p._id}
					variants={variantsChildren}
				>
					<Link href={`/${route}/${p.alias}`}
						tabIndex={isOpened ? 0 : -1}
						className={sn(styles.thirdLevel, {
							[styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
						})}>
						{p.category}

					</Link>
				</motion.li>
			))
		);
	};

	return (
		<nav
			className={styles.menu}
			role='navigation'>
			{buildFirstLevel()}
		</nav>
	);
};