import styled from 'styled-components';
import theme from '../../theme';

const TitleSection = styled.h2`
    color: ${ theme.rojo };
    text-align: center;
    -webkit-text-stroke: 2px #fff;
    font-size: 48px;
    letter-spacing: 5px;
    @media (max-width: 1000px){
        font-size: 38px;
        -webkit-text-stroke: 1px #fff;
    }
`;

export default TitleSection;