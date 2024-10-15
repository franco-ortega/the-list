import ListItem from '../listItem/ListItem';

type Props = {
	list: string[];
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
