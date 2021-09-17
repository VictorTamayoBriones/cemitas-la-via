import styled from 'styled-components';
import theme from '../../theme';

const EnlaceNavbar = styled.a`
    color: ${theme.naranja};
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 3px;
    -webkit-text-stroke: 1px #fff;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        text-decoration: underline ${ theme.naranja };
    }
    @media (max-width: 1160px){
        font-size: 25px;
    }
    @media (max-width: 669px){
        font-size: 20px;
        color: #fff;
        &:hover{
            color: ${ theme.rojo };
            -webkit-text-stroke: 0px #fff;
        }
    }
    @media (max-width: 587px){
        letter-spacing: 1px;
    }
    @media (max-width: 442px){
        font-size: 18px;
        font-weight: 300;
    }
`;
 
const EnlacesContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    gap: 75px;
    @media (max-width: 1160px){
        width: 100%;
        gap: 25px;
        justify-content: center;
    }
    @media (max-width: 669px){
        background: ${ theme.naranja };
    }
    @media (max-width: 587px){
        gap: 18px;
    }
    @media (max-width: 442px){
        gap: 12px;
    }
`;

export {EnlaceNavbar, EnlacesContainer};