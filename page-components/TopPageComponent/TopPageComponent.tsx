import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({ products }: TopPageComponentProps): JSX.Element => {
	return (
		<>
			{products && products.length}
		</>
	);
};