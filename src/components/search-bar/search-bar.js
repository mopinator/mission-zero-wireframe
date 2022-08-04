import styles from "../search-bar/search-bar.module.css";

export default function SearchBar() {
	return (
		<div>
			<div className={styles.search}>
				<h1>Whats your favorite dessert?</h1>
				<div className={styles["search-inputs"]}>
					<input className={styles["input-box"]} type="text" placeholder="Search for favorite recipes..." />
					<button className={styles["search-button"]}>Search</button>
				</div>
			</div>
		</div>
	);
}
