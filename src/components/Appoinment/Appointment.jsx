import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Appointment.module.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Appointment() {
    return (
        <div className={styles.appointmentSection}>
            <div className={styles.mainTitle}>
                <h2 className={styles.highTitle}>
                    <span className={styles.redTitle}>Book an </span>
                    <span className={styles.blueTitle}>Appointment</span>
                </h2>
                <p className={styles.titleDescription}>
                    Fill out the form below or contact us directly. We'll get back to you as soon as possible.
                </p>
            </div>
            <div className={styles.appointmentForm}>
                <div className={styles.contactSection}>
                    <div className={styles.contactIcon}>
                        <span className={styles.icon}>
                            <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                        </span>
                        <div className={styles.contactInfo}>
                            <p className={styles.title}>WhatsApp</p>
                            <p>+51 967 011 285</p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <form action="">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="tel" placeholder="Your Phone" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit" className={styles.submitButton}><i><FontAwesomeIcon icon={faWhatsapp} /></i>Submit</button>
                        </form>
                        <div className={styles.emergencyMessage}>
                            <p>*If you need an emergency attention, please <a href="#">Call Us</a> or <a href="#">Chat with Us</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}