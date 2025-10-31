import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export default function About() {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.mainTitle}>
                <h2 className={styles.highTitle}>
                    <span className={styles.redTitle}>About</span>
                    <span className={styles.blueTitle}> Doctor Cusco</span>
                </h2>
                <p className={styles.titleDescription}>
                    Meet our team of experienced, multilingual medical professionals.
                </p>
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.image}>
                    <img src="./images/stock/doctor-cusco.jpg" alt="" />
                    <p>Dr. David Quispe - ID: 54654765-C</p>
                </div>
                <div className={styles.aboutContent}>
                    <div className={styles.logo}>
                        <img src="/images/brand/logo_vertical.png" alt="" />
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin suscipit ligula, accumsan ullamcorper risus feugiat sed. Pellentesque feugiat, augue ut interdum cursus, erat urna faucibus nisl, at vulputate urna augue feugiat leo. Mauris rhoncus facilisis mauris et suscipit.
                    </p>
                    <div className={styles.featureAbout}>
                        <div className={styles.feature}>
                            <span className={styles.icon}>
                                <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                            </span>
                            <div className={styles.featureContent}>
                                <h3>Feature Title</h3>
                                <p>Feature description goes here.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.externalLinks}>
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