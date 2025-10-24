import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.logo}>
                <img src="/images/brand/logo_doctorcusco.png" alt="Doctor Cusco Logo" />
            </div>
            <div className={styles.navbar}>
                <nav className={styles.navLinks}>
                    <a href="#services">Services</a>
                    <a href="#about">About Us</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a href="#appointment">
                    <button className={styles.buttonEmergencies}>
                        Emergencies
                    </button>
                </a>
            </div>
        </header>
    );
}
