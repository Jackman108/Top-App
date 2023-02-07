import styles from './Menu.module.css';
import classNames from 'classnames/bind';
import { AppContext } from '@/context/app.context';
import { useContext } from 'react';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/helpers/helpers';

const styleNames = classNames.bind(styles);

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>

							<div className={styleNames(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>

						</Link>
						{m.id == firstCategory && buildSecondtLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondtLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
							<div className={styleNames(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened
							})}>
								{buildThirdtLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdtLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link href={`/${route}/${p.alias}`} className={styleNames(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
				})} key={p.category}>

					{p.category}

				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};