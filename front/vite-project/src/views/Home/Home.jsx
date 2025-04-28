import './Home.css'
const Home = ( ) =>{
    return ( 
        <main className="home-container">
            <h1 className="home-title">🧘‍♀️ Bienvenido a <span className="highlight">YogaFlow</span></h1>
            <p className="home-subtitle">Encuentra tu equilibrio, conecta contigo.</p>

            <section className="home-section">
                <p>
                En <strong>YogaFlow</strong> creemos que el bienestar empieza con pequeños pasos.
                <br />
                Reserva tu turno, practica con nosotros y siente el cambio.
                </p>
            </section>

            <section className="home-section">
                <h2 className="home-section-title">¿Qué puedes hacer aquí?</h2>
                <ul className="home-list">
                    <li>🔹 <strong>Registrarte</strong> y ser parte de nuestra comunidad.</li>
                    <li>🔹 <strong>Reservar</strong> tu clase de yoga en los horarios disponibles.</li>
                    <li>🔹 <strong>Gestionar tus turnos</strong>: cancela o modifica tus reservas fácilmente.</li>
                    <li>🔹 <strong>Iniciar sesión</strong> para acceder a todas tus actividades.</li>
                </ul>
            </section>

            <section className="home-section">
                <h2 className="home-section-title">Horarios de práctica:</h2>
                <p>🕒 De lunes a sábado, de 8:00 AM a 8:00 PM</p>
                <p className="home-note">(¡Muy pronto también habra clases especiales los domingos!)</p>
            </section>

            <section className="home-section">
                <h2 className="home-section-title">¿Listo para comenzar tu viaje de bienestar?</h2>
                <button className="home-button">
                Regístrate ahora
                </button>
            </section>
        </main>
  );
};


export default Home;