import styled from 'styled-components';
import Footer from '../../images/footer.png';

const Horario = () => {
    return ( 
        <ContainerHorario>
            <HorarioP>Horario</HorarioP>
            <HorarioP>Lunes a Sabado <br /> 8:00 am - 7:00 pm</HorarioP>
            <HorarioP>cemitaslavia@outlook.com</HorarioP>
            <img src={Footer} alt="" />
        </ContainerHorario>
    );
}

const HorarioP = styled.p`
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

const ContainerHorario = styled.div`
    padding: 70px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background: rgba(224,169,38,1);
    background: linear-gradient(0deg, rgba(255,255,255,.4) 60%, rgba(224,169,38,1) 100%);
    img{
        width: 100%;
        height: 200px;
    }
`;

export default Horario;