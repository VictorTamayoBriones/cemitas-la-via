import styled from 'styled-components';
import { Container, Body } from '../../elementos/Header-section';

const SectionContacto = () => {
    return (  
        <Container>
            <Body>
                <ContainerContacto>
                    <Contacto>Contacto</Contacto>
                    <Contacto>Dirección: Carretera federal Benito Juárez, No.66 Huamantla Tlax.</Contacto>
                    <Contacto>Tel. 241 194 0161</Contacto>
                </ContainerContacto>
            </Body>
        </Container>
    );
}

const Contacto = styled.p`
    text-align: center;
    -webkit-text-stroke: 1px #fff;
    font-size: 45px;
    width: 50%;

    @media (max-width: 1078px){
        width: 90%;
        font-size: 38px;
    }

    @media (max-width: 518px){
        font-size: 30px;
    }

    @media (max-width: 400px){
        width: 98%;
    }
`;

const ContainerContacto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export default SectionContacto;