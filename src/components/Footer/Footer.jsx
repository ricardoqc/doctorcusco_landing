import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
                <img src="./images/brand/logo_doctorcusco.png" alt="Logo Doctor Cusco" />
            </div>
            <div className={styles.footerMenu}>
                <ul>
                    <li>Reviews</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Book an Appointment</li>
                </ul>
            </div>
            <div className={styles.legalLinks}>
                <ul>
                    <li><a href="">Terms & Conditions</a> / <a href="">Privacy Policy</a></li>
                    <li>&copy; Doctor Cusco 2025 - All Rights Reserved</li>
                    <li><a href="https://doctorcusco.com" target='_blank'>Visit DoctorCusco.com</a></li>
                </ul>
            </div>
        </div>
    );
}