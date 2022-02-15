import styles from "./Series.module.css";
import working from "../working.svg"

export function Series() {

    return (
        <div className={styles.working}>
        <img src={working} alt="working"/>
        </div>
    );
}