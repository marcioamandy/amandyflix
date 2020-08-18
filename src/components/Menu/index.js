import React from 'react';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuWrapper } from './style.js';
// import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';


function Menu() {
return (
    <MenuWrapper className="Menu">
        <a href="/">
            <LogoImage className="Logo" src={Logo} alt="Logo AmandyFlix" />
        </a>
        <Button as="a" className="ButtonLink" href="/">
            Novo vídeo
        </Button>
    </MenuWrapper>
    );
}
export default Menu