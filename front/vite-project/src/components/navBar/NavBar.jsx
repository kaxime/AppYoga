import styles from "./NavBar.module.css"

const NavBar = () => {
    return <>
        <nav className={styles.nav}>

            <ul>
                <li>inicio</li>
                <li>servicios</li>
                <li>nosotros</li>

            </ul>


        </nav>
        <h1> esta es mi navbar</h1>
    </>
}
export default NavBar;