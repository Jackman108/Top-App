import styles from './Menu.module.css';
import classNames from 'classnames/bind';
import { AppContext } from '@/context/app.context';
import { useContext } from 'react';



export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	return (
		<div>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory} >{m._id.secondCategory}</li>))}
			</ul>
		</div>
	);
};