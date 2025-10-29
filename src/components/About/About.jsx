
export default function About() {
    return (
        <div className={styles.about-section}>
            <div className={styles.main-title}>
                <h2 className={styles.high-title}>
                    <span className={styles.red-title}>About</span>
                    <span className={styles.blue-title}>Doctor Cusco</span>
                </h2>
                <p className={styles.title-description}>
                    Meet our team of experienced, multilingual medical professionals.
                </p>
            </div>
            <div className={styles.about-content}>
                <div className={styles.image}>
                    <img src="" alt="" />
                </div>
                <div className={styles.about-content}>
                    <div className={styles.logo}>
                        <img src="" alt="" />
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin suscipit ligula, accumsan ullamcorper risus feugiat sed. Pellentesque feugiat, augue ut interdum cursus, erat urna faucibus nisl, at vulputate urna augue feugiat leo. Mauris rhoncus facilisis mauris et suscipit.
                    </p>
                    <div className={styles.feature-about}>
                        <div className={styles.feature}>
                            <span className={styles.icon}>
                                <i>icon</i>
                            </span>
                            <div className={styles.feature-content}>
                                <h3>Feature Title</h3>
                                <p>Feature description goes here.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.external-links}>
                        <p>External links:</p>
                        <div className={styles.links}>
                            <ul>
                                <li>More about us</li>
                                <li>Meet all team Doctors</li>
                                <li>Book a appointment</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}