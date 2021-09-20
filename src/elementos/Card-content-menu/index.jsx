import styled from 'styled-components';
import theme from '../../theme';

const CardMenu = styled.div`
    width: 40%;
    height: max-content;
    background: ${ theme.naranjaTransparente };
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0px 0px 20px ${ theme.sombra };
    -webkit-text-stroke: 1px #fff;
    font-size: 45px;
    ul{
        li{
            list-style: none;
        }
    }
    @media (max-width: 1000px){
        width: 60%;
        padding: 10px;
        font-size: 35px;
    }
    @media (max-width: 778px){
        width: 90%;
        text-align: center;
        font-weight: 700;
        -webkit-text-stroke: 1.3px #fff;
    }
    @media (max-width: 600px){
        width: 95%;
        font-size: 28px;
        -webkit-text-stroke: 1px #fff;
        position: absolute;
        background: rgba(224, 169, 38, 0.3);
        padding: 20px 0px;
    }
    z-index: 100;
`;

export {CardMenu};
