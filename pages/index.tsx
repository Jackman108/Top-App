import { Button, Htag, Tag, Ptag, Rating } from '@/components';
import { useState } from 'react';


export default function Home(): JSX.Element {

	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button apperance='primary' arrow='right'>Кнопка</Button>
			<Button apperance='ghost' arrow='down'>Кнопка</Button>
			<Ptag size='l'>Обзац</Ptag>
			<Ptag>Обзац</Ptag>
			<Ptag size='s'>Обзац</Ptag>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />

		</>
	);
}
