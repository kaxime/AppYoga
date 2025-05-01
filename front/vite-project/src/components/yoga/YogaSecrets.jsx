import React from 'react';
import '../../views/Home/Home.css';

const YogaSecrets = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Contenido <span className="highlight">exclusivo</span> para nuestra comunidad
      </h1>

      <p className="home-subtitle">
        Porque ya sos parte, queremos compartirte algunos tips y secretos que no contamos en redes. 😉
      </p>

      <div className="home-section">
        <h2 className="home-section-title">🌿 Tips de respiración</h2>
        <p>
          En tus prácticas en casa, probá hacer 5 minutos de respiración profunda antes de comenzar.
          Inhalá por la nariz en 4 tiempos, sostené 2, exhalá en 6. Esto activa el sistema parasimpático
          y calma el sistema nervioso.
        </p>
      </div>

      <div className="home-section">
        <h2 className="home-section-title">🌙 Ritual de cierre</h2>
        <p>
          Después de tu práctica, tomate 2 minutos para agradecerte. Repetí mentalmente una intención
          como: “Estoy en calma” o “Honro mi proceso”. La energía con la que cerrás, define tu día.
        </p>
      </div>

      <div className="home-section">
        <h2 className="home-section-title">📆 Agenda secreta</h2>
        <p>
          ¡Próximamente vamos a habilitar clases especiales al atardecer solo para quienes ya están registrados!
          Estate atenta a tu correo 😉
        </p>
      </div>

    </div>
  );
};
export default YogaSecrets;