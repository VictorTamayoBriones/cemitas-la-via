import styled from 'styled-components';
import theme from '../../theme';
import Logo from '../../images/logo.png';
import { EnlaceNavbar, EnlacesContainer } from '../../elementos/Enlaces-navbar';
import { motion } from 'framer-motion';

const Navbar = () => {
    return ( 
        <Navigation>
            <img src={ Logo } alt="Cemitas la vía" />
            <EnlacesContainer>
                <EnlaceNavbar as={motion.a} 
                    initial={{ scale: 1, y: -100}}
                    animate={{ y: 0}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: .4
                    }}
                >Cemitas y Tortas</EnlaceNavbar>

                <EnlaceNavbar as={motion.a} 
                    initial={{ scale: 1, y: -100}}
                    animate={{ y: 0}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: .6
                    }}
                >Desayunos</EnlaceNavbar>

                <EnlaceNavbar as={motion.a}
                    initial={{ scale: 1, y: -100}}
                    animate={{ y: 0}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: .8
                    }}
                >Especiales</EnlaceNavbar>

                <EnlaceNavbar as={motion.a}
                    initial={{ scale: 1, y: -100}}
                    animate={{ y: 0}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      delay: 1
                    }}
                >Contacto</EnlaceNavbar>
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
    overflow: hidden;
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