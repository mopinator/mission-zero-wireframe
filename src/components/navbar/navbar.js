import styles from "./navbar.module.css";
import hamburgerIcon from "../images/navbar-images/icon-hamburger.svg";
import closeIcon from "../images/navbar-images/icon-close.svg";
import donut from "../images/navbar-images/donut_icon.jpg";
import { useState } from "react";

export default function Navbar() {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<header className="primary-header">
			<div className={styles.container}>
				<div className={styles["nav-wrapper"]}>
					<div className={styles["company-container"]}>
						<img className={styles["donut-icon"]} src={donut} alt="img" />
						<p className={styles["company-container-p"]}>Doughboy</p>
					</div>
					<button
						onClick={() => {
							setOpenNavbar((currVal) => !currVal);
						}}
						className={styles["mobile-nav-toggle"]}
					>
						{openNavbar ? (
							<img className={styles["close-icon"]} src={closeIcon} alt="" />
						) : (
							<img className={styles["hamburger-icon"]} src={hamburgerIcon} alt="" />
						)}
					</button>
					<nav className={styles["primary-navigation-desktop"]}>
						<ul className={styles["nav-list-desktop"]}>
							<li>Menu</li>
							<li>Recipes</li>
							<li>About us</li>
							<li className={styles["login-button-desktop"]}>Login</li>
						</ul>
					</nav>
				</div>
			</div>
			{openNavbar && (
				<nav className={styles["primary-navigation-mobile"]}>
					<ul className={styles["nav-list-mobile"]}>
						<li>Menu</li>
						<li>Recipes</li>
						<li>About us</li>
						<li className={styles["login-button-mobile"]}>Login</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
