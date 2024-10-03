import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>Hello, Main</main>
			<footer className={styles.footer}>Hey, Footer</footer>
		</div>
	);
}
