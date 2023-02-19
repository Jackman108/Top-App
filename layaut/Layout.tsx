import { LayoutProps as LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { FunctionComponent, KeyboardEvent, useRef, useState } from 'react';
import { AppContextProvider, IAppContext } from '@/context/app.context';
import { Up } from '@/components';
import classNames from 'classnames/bind';

const sn = classNames.bind(styles);

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
	const bodyRef = useRef<HTMLDivElement>(null);

	const skipContentAction = (key: KeyboardEvent) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplayed(false);
	};
	return (
		<div className={styles.wrapper}>
			<a
				onFocus={() => setIsSkipLinkDisplayed(true)}
				tabIndex={0}
				className={sn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed
				})}
				onKeyDown={skipContentAction}
			>К содержанию</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main
				className={styles.body}
				ref={bodyRef}
				tabIndex={0}
				role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
			<Up />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function WithLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};