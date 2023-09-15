import Juego from "./Juego";


export default function ListadoJuegos({ juegos }) {
  return (
    <>
      <h2 className="heading">Games</h2>

      {juegos.length && (
        <div className="juegos-grid">
          {juegos.map((juego) => (
            <Juego key={juego?.id} juego={juego} />
          ))}
        </div>
      )}
    </>
  );
}
