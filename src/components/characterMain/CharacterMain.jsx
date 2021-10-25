import "./characterMain.css";

import { characters } from "../../data";

import Seldon from "../../img/seldon.png";
import Gaal from "../../img/gaal.png";
import Salvor from "../../img/hardin.png";

import Character from "../character/Character";

const CharacterMain = () => {
  return (
    <div className="c-main" id="serie">
      <h2 className="c-header">Personajes Destacados</h2>
      <h3 className="c-subheader">Serie de TV</h3>
      <div className="c-wrapper">
        {characters.map((item) => (
          <Character
            name={item.name}
            img={item.img}
            bio={item.bio}
            type={item.type}
            planet={item.planet}
            era={item.era}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterMain;
