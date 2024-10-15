type Props = {
	item: string;
};

export default function ListItem({ item }: Props) {
	return <li>{item}</li>;
}
