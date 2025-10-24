import styles from './Header.module.css';

export default function Header({ title = 'Doctor Cusco' }) {
    return (
        <header className={styles.siteHeader}>
            <a href="/" className={styles.logo}>{title}</a>
            <nav>
                <a href="#servicios">Servicios</a>
                <a href="#equipo">Equipo</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </header>
    );
}
