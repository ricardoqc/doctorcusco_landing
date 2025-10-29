
export default function Footer() {
    return (
        <div className={styles.footer-section}>
            <div className={styles.footer-logo}>
                <img src="" alt="" />
            </div>
            <div className={styles.footer-menu}>
                <ul>
                    <li>Reviews</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Book an Appointment</li>
                </ul>
            </div>
            <div className={styles.legal-links}>
                <ul>
                    <li><a href="">Terms & Conditions</a> / <a href="">Privacy Policy</a></li>
                    <li>&copy; Doctor Cusco 2025 - All Rights Reserved</li>
                    <li><a href="https://doctorcusco.com" target='_blank'>Visit DoctorCusco.com</a></li>
                </ul>
            </div>
        </div>
    );
}