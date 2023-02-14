import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import classNames from 'classnames/bind';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

const styleNames = classNames.bind(styles);

export const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();
	const onSubmit = (data: IReviewForm) => {
		console.log(data);
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
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' }
					})}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
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
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.succsess}>
				<div className={styles.succsessTitle}>Ваш отзыв отправлен</div>
				<div>
					Спасибо, Ваш отзыв будет опубликован после проверки.
				</div>
				<CloseIcon className={styles.close} />
			</div>
		</form>
	);
};