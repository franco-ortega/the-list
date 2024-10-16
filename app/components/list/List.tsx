import { ListType } from '@/app/utils/types';
import ListItem from '../listItem/ListItem';

type Props = {
	list: ListType[];
};

export default function List({ list }: Props) {
	return (
		<ul>
			{list.map((item, i) => (
				<ListItem key={i} item={item} />
			))}
		</ul>
	);
}
