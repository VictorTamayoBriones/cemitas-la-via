import styled from 'styled-components';
import theme from '../../theme'; 

const BannerSlider = styled.div`
    width: 60%;
    background: ${ theme.negroTransparente };
    position: absolute;
    z-index: 1000;
    color: #fff;
    border-radius: 12px;
    font-size: 38px;
    letter-spacing: 3px;
    line-height: 150px;
    @media (max-width: 1000px){
        width: 80%;
        font-size: 22px;
        letter-spacing: 1px;
        line-height: 70px;
        padding: 5px;
    }
`;

export default BannerSlider;