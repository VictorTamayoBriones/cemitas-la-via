import styled from 'styled-components';
import theme from '../../theme';
import Logo from '../../images/logo.png';
import { EnlaceNavbar, EnlacesContainer } from '../../elementos/Enlaces-navbar';

const Navbar = () => {
    return ( 
        <Navigation>
            <img src={ Logo } alt="Cemitas la vía" />
            <EnlacesContainer>
                <EnlaceNavbar>Cemitas y Tortas</EnlaceNavbar>
                <EnlaceNavbar>Desayunos</EnlaceNavbar>
                <EnlaceNavbar>Especiales</EnlaceNavbar>
                <EnlaceNavbar>Contacto</EnlaceNavbar>
            </EnlacesContainer>
        </Navigation>
    );
}

const Navigation = styled.nav`
    width: 100%;
    height: 140px;
    background: ${ theme.rojo };
    display: flex;
    align-items: center;
    padding: 0px 20px;
    @media (max-width: 950px){
        flex-direction: column;
        height: max-content;
        padding: 5px 20px;
        img{
            transform: scale(.8);
            margin: -12px 0px;
        }
    }
    @media (max-width: 669px){
        padding: 0px;
    }
`;

export default Navbar;