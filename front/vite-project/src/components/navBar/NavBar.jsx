import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UsersContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const { user, logoutUser } = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };
           return (
        <nav className={styles.nav}>
            <div className={styles.nav_text}><strong>YogApp</strong></div>

            <ul className={styles.nav_ul}>
                <li className={styles.nav_items}><Link to="/">Inicio</Link></li>
                {!user && (
                    <>
                        <li className={styles.nav_items}><Link to="/login">Login</Link></li>
                        <li className={styles.nav_items}><Link to="/register">Register</Link></li>
                    </>
                )}
                {user && (
                    <>
                    <li className={styles.nav_items}><Link to="/turnos">Turnos</Link></li>
                    <li className={styles.nav_items}><Link to="/yoga">YogaSecrets</Link></li>
                    </>
                )}
            </ul>

            {user && (
                <button onClick={handleLogout} className={styles.logout}> Cerrar sesión</button>
            )}
        </nav>
    );
};

export default NavBar;