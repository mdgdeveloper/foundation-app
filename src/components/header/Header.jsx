import "./header.css";
import MainLogo from '../../img/mainLogo.png';

const Header = () => {
  return (
    <div>
      <div className="he-wrapper">
        <div className="he-logo">
            <div className="he-main-title"><img src={MainLogo} alt="Enciclopedia Galactica" /></div>
            </div>
        <div className="he-menu">
            <div className="he-menu-item">Inicio</div>
            <div className="he-menu-item"><a href="#serie">La Serie</a></div>
            <div className="he-menu-item"><a href="#guia">Guía de Lectura</a></div>
            <div className="he-menu-item">Historia Imperial</div>
            <div className="he-menu-item">Guía de Episodios</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
