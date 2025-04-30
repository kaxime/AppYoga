import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return <>
        <nav className={styles.nav}>
            <div className={styles.nav_text}><strong>Yoga App</strong></div>

            <ul className={styles.nav_ul}>
                <li className={styles.nav_items}><Link to="/home"> Inicio </Link></li>
                <li className={styles.nav_items}><Link to="/login"> Login </Link></li>
                <li className={styles.nav_items}><Link to="/register"> Register </Link></li>
                <li className={styles.nav_items}><Link to="/turnos"> Turnos </Link></li>
            </ul>

            {/* <ul className={styles.nav_ul}>
                <li className={styles.logout}>Cerrar Sesión</li>
            </ul> */}

        </nav>
    </>
}
export default NavBar;