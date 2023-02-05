import styles from './Menu.module.css';
import classNames from 'classnames/bind';
import { AppContext } from '@/context/app.context';
import { useContext } from 'react';
import { firstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';

const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Courses },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Courses },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Courses },
];

const styleNames = classNames.bind(styles);

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={styleNames(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondtLevel(m)}
					</div>

				))}

			</>
		);
	};

	const buildSecondtLevel = (menuItem: firstLevelMenuItem) => {

		return (
			<div>
				{menu.map(m => (

					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={styleNames((styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						}))}>
							{buildThirdtLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdtLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} className={styleNames(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})} key={p.category}>
					{p.category}
				</a>
			))

		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};