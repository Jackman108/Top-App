import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import classNames from 'classnames/bind';

const styleNames = classNames.bind(styles);

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<div>
			{product.title}
		</div>
	);
};