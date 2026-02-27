import { useParams, Link } from "react-router-dom";
import items from "../data/items.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Card from "../components/Card/Card.jsx";
import CardGallery from "../components/Card/CardGallery.jsx";
import CardActions from "../components/Card/CardActions.jsx";
import "./ProductDetail.css";

function ProductDetail({ favoritos = [], toggleFavorito }) {
    const { id } = useParams();
    const producto = items.find((item) => item.id === Number(id));

    // 🔴 Producto no existe
    if (!producto) {
        return (
            <div className="detail detail--error">
                <h2>Este alojamiento no existe 😢</h2>
                <p>Puede que haya sido eliminado o la URL sea incorrecta.</p>
                <Link to="/" className="detail__back">
                    Volver al inicio
                </Link>
            </div>
        );
    }

    // 🟢 Productos relacionados
    const relacionados = items
        .filter((item) => item.id !== producto.id)
        .slice(0, 3);

    return (
        <>
            <Breadcrumbs nombre={producto.nombre} />

            <div className="detail">
                <CardGallery imagenes={producto.imagenes} isDetail />

                <div className="detail__info">

                    {/* Título + corazón reutilizado */}
                    <div className="detail__titleRow">
                        <h1>{producto.nombre}</h1>

                        <CardActions
                            id={producto.id}
                            favoritos={favoritos}
                            toggleFavorito={toggleFavorito}
                        />
                    </div>

                    <p className="detail__price">
                        {producto.precio}€ / noche
                    </p>

                    <p className="detail__description">
                        {producto.descripcion}
                    </p>

                    <h3>Equipamiento</h3>
                    <ul>
                        <li>WiFi</li>
                        <li>Cocina equipada</li>
                        <li>Aire acondicionado</li>
                        <li>Check-in autónomo</li>
                    </ul>
                </div>
            </div>

            <section className="related">
                <h2>Alojamientos similares</h2>

                <div className="related__grid">
                    {relacionados.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            imagenes={item.imagenes}
                            descripcion={item.descripcion}
                            favoritos={favoritos}
                            toggleFavorito={toggleFavorito}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductDetail;