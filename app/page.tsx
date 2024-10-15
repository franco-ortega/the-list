import List from '@/app/components/list/List';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<header>
				<h1>Hello, List</h1>
			</header>
			<main className={styles.main}>
				<h2>Hello, Main</h2>
				<div>
					<List list={['one', 'two', 'three']} />
				</div>
			</main>
			<footer className={styles.footer}>
				<h3>Hey, Footer</h3>
			</footer>
		</div>
	);
}
