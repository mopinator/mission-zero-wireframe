import styles from "./navbar.module.css";
import hamburgerIcon from "../images/navbar-images/icon-hamburger.svg";
import closeIcon from "../images/navbar-images/icon-close.svg";
import { useState } from "react";
import { motion } from "framer-motion";
// import cardano from "../images/navbar images/cardano_2.jpg";

export default function Navbar() {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<header className="primary-header">
			<div className={styles.container}>
				<div className={styles["nav-wrapper"]}>
					<div className={styles["company-container"]}>
						<a href="/">
							<img className={styles.cardano} src="" alt="img" />
						</a>
						<p className={styles["company-container-p"]}>Company</p>
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
							<li>Menu2</li>
							<li>Menu1</li>
							<li>Menu3</li>
							<li className={styles["login-button"]}>Login</li>
						</ul>
					</nav>
				</div>
			</div>
			{openNavbar && (
				<nav className={styles["primary-navigation-mobile"]}>
					<ul className={styles["nav-list-mobile"]}>
						<li>Menu1</li>
						<li>Menu2</li>
						<li>Menu3</li>
						<li className={styles["login-button"]}>Login</li>
					</ul>
				</nav>
			)}
		</header>
	);
}
