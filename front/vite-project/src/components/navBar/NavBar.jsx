import styles from "./NavBar.module.css"

const NavBar = () => {
    return <>
        <nav className={styles.nav}>
            <div className={styles.nav_text}><strong>Yoga App</strong></div>

            <ul className={styles.nav_ul}>
                <li className={styles.nav_items}>inicio</li>
                <li className={styles.nav_items}>servicios</li>
                <li className={styles.nav_items}>nosotros</li>
                
            </ul>


        </nav>
    </>
}
export default NavBar;