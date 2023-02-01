import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import classNames from 'classnames/bind';
import { KeyboardEvent, useEffect, useState } from 'react';
import StarIcon from '../assets/star.svg';

const styleNames = classNames.bind(styles);


export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {

			const styleRating = styleNames(styles.star, {
				[styles.filled]: i < currentRating,
				[styles.editable]: isEditable
			});
			return (
				<span
					className={styleRating}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon

						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpase(i + 1, e)}
					/>
				</span>

			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};
	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpase = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};