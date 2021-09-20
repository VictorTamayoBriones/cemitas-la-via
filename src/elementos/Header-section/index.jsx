import styled from 'styled-components';
import Textura from '../../images/textura.svg';

const Header = styled.div`
    width: 100%;
    padding: 8px 0px;
    background-image: url(${Textura});
`;

const Body = styled.div`
    width: 100%;
    background: rgba(224,169,38,1);
    background: linear-gradient(0deg, rgba(255,255,255,.4) 0%, rgba(224,169,38,1) 89%);
    padding: 30px;
`;

const Container = styled.div`
    width: 100%;
    height: max-content;
`;

export { Header, Body, Container };