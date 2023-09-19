import "./Card.css";

function Card({ data }) {
  console.log(data);
  return (
    <section>
      <div>
        <img src={data.sprites?.other.home.front_default} alt={data.name} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Datos</th>
            <th>Valores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Tipo</td>
            <td>{data.types[0].type.name}</td>
          </tr>
          <tr>
            <td>Altura</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>Peso</td>
            <td>{data.weight}</td>
          </tr>
          <tr>
            <td>Experiencia base</td>
            <td>{data.base_experience}</td>
          </tr>
          <tr>
            <td>
              {" "}
              <b>Poderes:</b>
            </td>
            <td>
              {data.moves[0].move.name}, {data.moves[1].move.name},{" "}
              {data.moves[2].move.name}, {data.moves[3].move.name},{" "}
              {data.moves[4].move.name}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Card;
