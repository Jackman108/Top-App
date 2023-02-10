import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import classNames from 'classnames/bind';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

const styleNames = classNames.bind(styles);

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>(' ');
	const router = useRouter();
	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};
	const hendleKeyDown = (e: KeyboardEvent) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={styleNames(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={hendleKeyDown}
			/>
			<Button
				apperance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<GlassIcon />
			</Button>

		</div>
	);
};