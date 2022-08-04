import styles from "./cards.module.css";
import mango from "../images/cards/mango_sticky_rice.jpg";
import brownie from "../images/cards/choc_brownie.jpg";
import entremet from "../images/cards/entremet.jpg";

export default function Cards() {
	return (
		<div className={styles["cards-container"]}>
			<div className={styles["cards"]}>
				<img src={mango} alt="" />
				<h3>Mango Sticky Rice</h3>
				<p>Revist of Thai mango sticky rice</p>
			</div>
			<div className={styles["cards"]}>
				<img src={brownie} alt="" />
				<h3>Chocolate Bronwie</h3>
				<p>Salted caramel, chocolate supreme, sesame brittle, chocolate shortbread</p>
			</div>
			<div className={styles["cards"]}>
				<img src={entremet} alt="" />
				<h3>Entremet</h3>
				<p>What is your favorite Entremet?</p>
			</div>
		</div>
	);
}
