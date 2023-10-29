import styles from "./styles.module.css";

export default function Restaurant({params}) {
    return  <div>
        <h3 className={styles.restaurantName}>Имя ресторана</h3>
        <span>{params.restaurantId}</span>
        <h4>Меню:</h4>
        <h5>Отзывы:</h5>
    </div>
}