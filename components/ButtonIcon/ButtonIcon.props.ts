import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from './up.svg';
import cross from './cross.svg';
import menu from './menu.svg';

export const icons = {
	up,
	cross,
	menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName;
	appearance: 'primary' | 'white';
}