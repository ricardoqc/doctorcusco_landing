import styles from './Reviews.module.css';

export default function Reviews() {
    return (
        <div className={styles.reviewsSection}>
            <div className={styles.mainTitle}>
                <h2 className={styles.highTitle}>
                    <span className={styles.redTitle}>What Our </span>
                    <span className={styles.blueTitle}>Patients Say</span>
                </h2>
                <p className={styles.titleDescription}>
                    Read reviews from travelers who trusted us with their health in Cusco
                </p>
            </div>
            <div className={styles.reviewsContainer}>
                reviews
            </div>
        </div>
    );
}