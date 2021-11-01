import './footer.css';
import Logo from '../../img/mainLogo.png';

const Footer = () => {
    return (
        <div className='f-wrapper'>
            <div className="f-left">
                <img src={Logo} alt="" className="f-logo" />
                <h2 className="f-about">Acerca de la Enciclipedia Galactica</h2>
                <p className="f-about-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo facere tempore dolor consectetur sint nisi quasi in impedit harum, illum unde totam nemo voluptatibus officia suscipit pariatur nulla nostrum? Illum?</p>
            </div>
            <div className="f-center">Center</div>
            <div className="f-right">Right</div>
        </div>
    )
}

export default Footer
