import { Header, Body, Container } from '../../../elementos/Header-section';
import TitleSection from '../../../elementos/Title-section';
import Sections from '../data/sectionData';
import Cemita from '../../../images/cemita.png';
import Torta from '../../../images/torta.png';
import {CardMenu} from '../../../elementos/Card-content-menu';
import styled from 'styled-components';

const CemitasYTortas = () => {

    const section = Sections.filter( sec => sec.id === 1 );
    return (
        section.map(({ title, id })=>{
            return(
                <Container key={id} >
                    <Header><TitleSection>{ title }</TitleSection></Header>
                    <Body>
                        <ContainerDoc>
                            <img src={Cemita} alt="" />
                            <CardMenu>
                                <ul>
                                    {
                                        section.map(({menu:{cemitas}})=>{
                                            return(
                                                cemitas.map(cemita => {
                                                    return <li key={cemita} >{cemita}</li>                                            
                                                })
                                            )
                                        })
                                    }
                                </ul>
                            </CardMenu>
                        </ContainerDoc>
                        <ContainerDoc className="reverse" >
                            <CardMenu>
                                <ul>
                                    {
                                        section.map(({menu:{tortas}})=>{
                                            return(
                                                tortas.map(torta => {
                                                    return <li key={torta} >{torta}</li>                                            
                                                })
                                            )
                                        })
                                    }
                                </ul>
                            </CardMenu>
                            <img src={Torta} className="torta" alt="" />
                        </ContainerDoc>
                    </Body>
                </Container>
            );
        })
    );
}

const ContainerDoc = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    @media (max-width: 1000px){
        gap: 2px;
        img{
            scale: .7;
        }
    }
    @media (max-width: 778px){
        flex-direction: column;
        img{
            margin: -25px 0px;
        }
        &.reverse{
            flex-direction: column-reverse;
        }
    }
`;

export default CemitasYTortas;