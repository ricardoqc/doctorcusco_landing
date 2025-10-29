
export default function Reviews() {
    return (
        <div className={styles.reviews-ssection}>
            <div className={styles.main-title}>
                <h2 className={styles.high-title}>
                    <span className={styles.red-title}>What Our</span>
                    <span className={styles.blue-title}>Patients Say</span>
                </h2>
                <p className={styles.title-description}>
                    Read reviews from travelers who trusted us with their health in Cusco
                </p>
            </div>
            <div className={styles.reviews-container}>
                reviews
            </div>
        </div>
    );
}