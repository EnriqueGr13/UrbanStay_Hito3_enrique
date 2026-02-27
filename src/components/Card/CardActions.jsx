import { FaRegHeart, FaHeart } from "react-icons/fa";

const CardActions = ({ id, favoritos = [], toggleFavorito }) => {
    const favorito = favoritos.includes(id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (toggleFavorito) {
        toggleFavorito(id);
        }
    };

    return (
        <button
            className={`card__fav ${favorito ? "active" : ""}`}
            onClick={handleClick}
            aria-label="Marcar como favorito"
            >
            {favorito ? <FaHeart /> : <FaRegHeart />}
        </button>
    );
};

export default CardActions;