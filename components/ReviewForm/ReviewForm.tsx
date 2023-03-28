import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import classNames from 'classnames/bind';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '@/helpers/api';
import { useState } from 'react';

const styleNames = classNames.bind(styles);

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			if (e instanceof Error)
			setError((e as Error).message);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styleNames(styles.reviewForm, className)}
				{...props}
			>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' }
					})}
					placeholder='Имя'
					className={styles.name}
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
					area-invalid={errors.name ? true : false}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
					area-invalid={errors.title ? true : false}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните описание' }
					})}
					placeholder='Текст отзыва'
					className={styles.description}
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
					aria-label='Тект отзыва'
					area-invalid={errors.description ? true : false}
				/>
				<div className={styles.submit}>
					<Button appearance='primary' tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			{isSuccess && <div className={styleNames(styles.success, styles.panel)} role="alert">
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, Ваш отзыв будет опубликован после проверки.
				</div>
				<button
					onClick={() => setIsSuccess(false)}
					className={styles.close}
					aria-label="закрыть оповещение"
				>
					<CloseIcon />
				</button>
			</div>}
			{error && <div className={styleNames(styles.error, styles.panel)} role="alert">
				Что-то пошло не так, попробуйте обновить страницу
				<button
					onClick={() => setError(undefined)}
					className={styles.close}
					aria-label="закрыть оповещение"
				>
					<CloseIcon />
				</button>

			</div>}
		</form>
	);
};