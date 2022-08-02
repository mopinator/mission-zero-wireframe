import styles from "../search-bar/search-bar.module.css";

export default function SearchBar() {
	return (
		<div>
			<div className={styles.search}>
				<h1>Something about the company here</h1>
				<div className={styles["search-inputs"]}>
					<input className={styles["input-box"]} type="text" placeholder="Enter your search here..." />
					<button className={styles["search-button"]}>Search</button>
				</div>
			</div>
		</div>
	);
}
