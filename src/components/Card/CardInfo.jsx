import { Link } from "react-router-dom";

const CardInfo = ({id, nombre, descripcion, precio }) => {
    return (
        <div className="card__content">

        <Link to={`/producto/${id}`} className="sin_estilo2">
            <h3>{nombre}</h3>
            
            <p className="card__description">{descripcion}</p>
            <span className="card__price">{precio}€ / noche</span>
        </Link>
        </div>
    );
};

export default CardInfo;
