import styles from "./Series.module.css";
import working from "../working.svg"

export function Usuario() {

    return (
        <div className={styles.working}>
        <img src={working} alt="working"/>
        </div>
    );
}