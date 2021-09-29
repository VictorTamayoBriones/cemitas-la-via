import styled from 'styled-components';

const GoogleMaps = () => {
    return (  
        <Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.052984160339!2d-97.9227078932031!3d19.32350701726547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cffc8c9fa0f825%3A0x11191c51ba822ccf!2sCemitas%20%22La%20Via%22!5e0!3m2!1ses-419!2smx!4v1632452858792!5m2!1ses-419!2smx" title="Cemitas la vía"  allowFullScreen="" loading="lazy"></iframe>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 300px;
    background: #ccc;
    box-shadow: 0px -1px 10px 10px rgba(0,0,0,0.2);
    position: relative;
    z-index: 100;
    iframe{
        width: 100%;
        height: 100%;
        border: none;
    }
`;

export default GoogleMaps;