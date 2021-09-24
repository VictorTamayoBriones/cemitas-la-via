import styled from 'styled-components';
import FooterImage from '../../images/footer.png';

const Footer = () => {
    return (
        <FooterContainer>
            <img src={ FooterImage } alt="footer" />
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
`;

export default Footer;