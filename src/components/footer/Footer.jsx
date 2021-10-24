import './footer.css';
import Logo from '../../img/mainLogo.png';

const Footer = () => {
    return (
        <div className='f-wrapper'>
            <div className="f-left">
                <img src={Logo} alt="" className="f-logo" />
            </div>
            <div className="f-center">Center</div>
            <div className="f-right">Right</div>
        </div>
    )
}

export default Footer
