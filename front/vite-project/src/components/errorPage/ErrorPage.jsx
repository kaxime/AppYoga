import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <h1>Ups... Respirá hondo 🧘‍♀️</h1>
      <p>La ruta que buscás se fue a meditar entre montañas y no volvió aún.</p>
      <p>Quizás quieras volver al presente...</p>
      <Link to="/home" className="back-home-link">
      <strong>Ir al inicio</strong>
      </Link>
    </div>
  );
};

export default ErrorPage;
