import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import classNames from 'classnames/bind';


const styleNames = classNames.bind(styles);

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={styleNames(styles.sort, className)} {...props}>
			<button
				onClick={() => setSort(SortEnum.Rating)}
				className={styleNames({
					[styles.active]: sort == SortEnum.Rating
				})}
			>
				<SortIcon className={styles.sortIcon} /> По рейтингу
			</button>
			<button
				onClick={() => setSort(SortEnum.Price)}
				className={styleNames({
					[styles.active]: sort == SortEnum.Price
				})}
			>
				<SortIcon className={styles.sortIcon} /> По цене
			</button>
		</div>
	);
};