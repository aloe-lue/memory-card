import Cards from "./component/Cards";
import "./style/style.css";
import { useEffect, useState } from "react";

export default function App() {
  const fetchData = async (value) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
      const request = await fetch(url, {
        mode: "cors",
      });
      if (!request.ok) {
        console.warn(request.statusText);
      }
      const response = await request.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  let array = [
    { id: "700", key: crypto.randomUUID() },
    { id: "arceus", key: crypto.randomUUID() },
    { id: "gyarados", key: crypto.randomUUID() },
    { id: "mewtwo", key: crypto.randomUUID() },
    { id: "eevee", key: crypto.randomUUID() },
    { id: "rattata", key: crypto.randomUUID() },
    { id: "togepi", key: crypto.randomUUID() },
    { id: "pikachu", key: crypto.randomUUID() },
    { id: "vulpix", key: crypto.randomUUID() },
    { id: "gardevoir", key: crypto.randomUUID() },
    { id: "cosmog", key: crypto.randomUUID() },
    { id: "dragonite", key: crypto.randomUUID() },
    { id: "phanpy", key: crypto.randomUUID() },
    { id: "snom", key: crypto.randomUUID() },
    { id: "yamper", key: crypto.randomUUID() },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    let datas = array.map(({ id, key }) => {
      return [fetchData(id), key];
    });

    let combine = data.concat(datas);
    setData(combine);
  }, []);

  return (
    <>
      <header>
        <div className="header-content">
          <div className="memory-game">
            <h1>Memory Card</h1>
            <p>
              Click any image to gain points but don't click the same image
              twice
            </p>
          </div>
        </div>
      </header>
      <main>
        <Cards data={data}></Cards>
      </main>
    </>
  );
}
