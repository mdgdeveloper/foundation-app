import './main.css'
import Planet from '../../img/planet.png';

const Main = () => {
    return (
<div className="m-wrapper">
    <div className="m-planet">
        <img src={Planet} alt="" className="m-planet-img" />
    </div>
    <div className="m-message">
        <div className="m-main-subtitle">Bienvenido</div>
        <div className="m-main-title">Enciclopedia Galáctica</div>
        <div className="m-desc">Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ab, quas saepe nesciunt molestiae tenetur quae 
        maxime amet, qui ea temporibus impedit quaerat? 
        Qui consectetur eveniet doloribus sit incidunt illum recusandae. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ab, quas saepe nesciunt molestiae tenetur quae 
        maxime amet, qui ea temporibus impedit quaerat? 
        Qui consectetur eveniet doloribus sit incidunt illum recusandae.</div>
        <button className="m-button">Acceder</button>
    </div>
</div>
    )
}

export default Main
