import "./characterMain.css";

import Seldon from "../../img/seldon.png";
import Gaal from "../../img/gaal.png";
import Salvor from "../../img/hardin.png";

const CharacterMain = () => {
  return (
    <div className="c-main">
      <h2 className="c-header">Personajes Destacados</h2>
      <h3 className="c-subheader">Serie de TV</h3>
      <div className="c-wrapper">
        <div className="c-item">
          <img src={Seldon} alt="" className="c-image" />
          <div className="c-desc">
            <h2 className="c-desc-title">Hari Seldon</h2>
            <div className="c-tag-list">
                <div className="c-tag c-tag-race">Humano</div>
                <div className="c-tag c-tag-planet">Trantor</div>
                <div className="c-tag c-tag-era">Cleon XII</div>
            </div>
            <p className="c-desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              similique, tempore quam fugit minus deserunt nisi excepturi ipsam
              dolorum ad earum neque aspernatur eaque ducimus natus adipisci,
              odio nesciunt omnis.
            </p>
          </div>
        </div>
        <div className="c-item">
        <img src={Gaal} alt="" className="c-image" />
          <div className="c-desc">
            <h2 className="c-desc-title">Gaal Dornick</h2>
            <div className="c-tag-list">
                <div className="c-tag c-tag-race">Humana</div>
                <div className="c-tag c-tag-planet">Sywenna</div>
                <div className="c-tag c-tag-era">Cleon XII</div>
            </div>
            <p className="c-desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              similique, tempore quam fugit minus deserunt nisi excepturi ipsam
              dolorum ad earum neque aspernatur eaque ducimus natus adipisci,
              odio nesciunt omnis.
            </p>
          </div>
        </div>
        <div className="c-item">
        <img src={Salvor} alt="" className="c-image" />
          <div className="c-desc">
            <h2 className="c-desc-title">Salvor Hardin</h2>
            <div className="c-tag-list">
                <div className="c-tag c-tag-race">Humana</div>
                <div className="c-tag c-tag-planet">Terminus</div>
                <div className="c-tag c-tag-era">Cleon XIII</div>
            </div>
            <p className="c-desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              similique, tempore quam fugit minus deserunt nisi excepturi ipsam
              dolorum ad earum neque aspernatur eaque ducimus natus adipisci,
              odio nesciunt omnis.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CharacterMain;
