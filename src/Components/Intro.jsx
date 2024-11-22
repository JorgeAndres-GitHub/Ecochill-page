import '../css/Intro.css';
import Logo from '../assets/Logo.jpg';

export function Intro() {
    return (
        <div className="intro-container">
            <div id="inicio" className="intro-content">
                <img src={Logo} alt="Logo de la empresa" className="company-logo" />
                <h1 className="company-name">Ecochill</h1>
            </div>
        </div>
    );
}