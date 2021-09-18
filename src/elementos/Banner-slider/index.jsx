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
`;

export default BannerSlider;