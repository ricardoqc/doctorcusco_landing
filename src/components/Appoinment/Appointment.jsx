
export default function Appointment() {
    return (
        <div className={styles.appointment-section}>
            <div className={styles.main-title}>
                <h2 className={styles.high-title}>
                    <span className={styles.red-title}>Book an</span>
                    <span className={styles.blue-title}>Appointment</span>
                </h2>
                <p className={styles.title-description}>
                    Fill out the form below or contact us directly. We'll get back to you as soon as possible.
                </p>
            </div>
            <div className={styles.appointment-form}>
                <div className={styles.contact-section}>
                    <div className={styles.contact-icon}>
                        <span className={styles.icon}>
                            <i>phone-icon</i>
                        </span>
                        <div className={styles.contact-info}>
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
                            <button type="submit" className={styles.submit-button}>Submit</button>
                        </form>
                        <div className={styles.emergency-message}>
                            <p>*If you need an emergency attention, please <a href="#">Call Us</a> or <a href="#">Chat with Us</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}