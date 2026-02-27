import items from "../data/items";
import Card from "../components/Card/Card";
import "./Favoritos.css";

function Favoritos({ favoritos, toggleFavorito }) {
  const alojamientosFavoritos = items.filter((item) =>
    favoritos.includes(item.id)
  );

  return (
    <div className="favoritos">
      <h1>Mis favoritos</h1>

      {alojamientosFavoritos.length === 0 ? (
        <p className="vacio">No has guardado ningún alojamiento.</p>
      ) : (
        <main className="products grid">
          {alojamientosFavoritos.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              nombre={item.nombre}
              precio={item.precio}
              imagenes={item.imagenes}
              descripcion={item.descripcion}
              viewMode="grid"
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
            />
          ))}
        </main>
      )}
    </div>
  );
}

export default Favoritos;