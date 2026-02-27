import "./Card.css";
import CardGallery from "./CardGallery.jsx";
import CardInfo from "./CardInfo.jsx";
import CardActions from "./CardActions.jsx";

const Card = ({id, nombre, precio, imagenes, descripcion, viewMode, favoritos, toggleFavorito }) => {
    return (
        <article className={`card ${viewMode}`}>
            <CardGallery imagenes={imagenes} id={id}>
                <CardActions 
                    id={id} 
                    favoritos={favoritos || []}
                    toggleFavorito={toggleFavorito}/>
            </CardGallery>

            <CardInfo
                id={id}
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
            />
            
        </article>
    );
};

export default Card;
