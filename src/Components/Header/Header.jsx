import React, {useState} from 'react';
import './Header.css';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [resp, setResp] = useState(null);
    let brand = '<Matheus de Paula />';
    return ( 
        <>
            <header className="header">
                <div>
                    <span className="brand">{brand}</span>
                </div>
                <nav className={`${resp === true} ? resp-nav : nav`}>
                    <Link to="/">Sobre mim</Link>
                    <Link to="/posts">Meu trabalho</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
                <div className="icons">
                    <a href="https://github.com/MatheusDev20" target="blank">
                        <img src={github} className="icon-flat" alt="icon-github"/>
                    </a>
                    <a href="https://www.instagram.com/matheus.de.paula_f/" target="blank">
                        <img src={instagram} className="icon-flat"  alt="icon-instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/matheusdev20/" target="blank">
                        <img src={linkedin} className="icon-flat"  alt="icon-linkedin"/>
                    </a>
                </div>
            </header>
        </>
    )
}
export default Navbar;