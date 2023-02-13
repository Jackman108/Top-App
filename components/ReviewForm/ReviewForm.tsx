import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import classNames from 'classnames/bind';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';

const styleNames = classNames.bind(styles);

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	return (
		<>
			<div className={styleNames(styles.reviewForm, className)}
				{...props}
			>
				<Input placeholder='Имя' className={styles.name} />
				<Input placeholder='Заголовок отзыва' className={styles.title} />
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Rating rating={0} />
				</div>
				<Textarea placeholder='Текст отзыва' className={styles.description} />
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
		</>
	);
};