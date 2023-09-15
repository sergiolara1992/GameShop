import imagen from "../../public/img/1366_2000.jpeg"

const Nosotros = () => {
  return (
    <main className="container nosotros">
      <h2 className="heading">GameShop</h2>

      <div className="contenido">
        <img className="imagen" src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Etiam non faucibus risus, vitae consequat orci. Donec felis neque,
            vestibulum id quam sed, faucibus ultricies justo. Nunc elit purus,
            consectetur id fermentum id, aliquam ut erat. Nulla quis dapibus
            lorem. Quisque et ex sed ante consectetur finibus ac eget magna. Nam
            et lobortis neque. Nulla facilisi. Ut egestas elit magna, in
            scelerisque leo finibus eget. Vivamus odio ligula, placerat id felis
            ac, egestas aliquam neque.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros
