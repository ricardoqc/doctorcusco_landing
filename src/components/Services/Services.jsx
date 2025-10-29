import styles from './Services.module.css';


export default function Services() {
    return (
        <div className={styles.serviceSection}>
            <div className={styles.mainTitle}>
                <h2 className={styles.highTitle}>
                    <span className={styles.redTitle}>Our Medical</span>
                    <span className={styles.blueTitle}> Services for Travellers</span>
                </h2>
                <p className={styles.titleDescription}>
                    Comprehensive healthcare services designed specifically for international tourists visiting Cusco
                </p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.iconTitle}>
                        <span className={styles.icon}>
                            <img src="/src/assets/images/icons/certified-vaccination-icon.svg" alt="" />
                        </span>
                        <h3 className={styles.title}>
                            Certified Vaccination Center
                        </h3>
                    </div>
                    <p className={styles.serviceDescription}>
                        Trusted vaccinations for a safe journey.
                    </p>
                    <div className={styles.consultService}>
                        <p className={styles.textConsult}>
                            Consult this on:
                        </p>
                        <div className={styles.consultButtons}>
                            <button className={styles.whatsapp}>
                                <i>whatsapp-icon</i>
                                WhatsApp
                            </button>
                            <button className={styles.email}>
                                <i>email-icon</i>
                                Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}