import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.titles}>
                <h1>Title 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum libero earum! Sit quidem mollitia a quis adipisci fugiat illum totam, quod maiores assumenda aperiam cumque qui tempore itaque tempora!</p>
            </div>
            <div className={styles.buttons}>
                <a href="#">
                    <button className={styles.emergency}>
                        Emergency
                    </button>
                </a>
                <a href="">
                    <button className={styles.appointment}>
                        Make an Appointment
                    </button>
                </a>
                
            </div>
            <div className={styles.features}>
                <ul>
                    <li>Licensed medical professional</li>
                    <li>Multi-language support</li>
                    <li>Emergencies Online Consultation</li>
                    <li>Hospital Coordination</li>
                </ul>
            </div>
        </div>
    );
}
