import { Header, Body, Container } from '../../../elementos/Header-section';
import TitleSection from '../../../elementos/Title-section';
import Sections from '../data/sectionData';
import { CardMenu } from '../../../elementos/Card-content-menu';
import styled from 'styled-components';

const Especiales = () => {
    const section = Sections.filter( sec => sec.id === 3 );

    return (  
        section.map((sec)=>{
            return(
                <Container key={sec} >
                    <Header><TitleSection>{ sec.title }</TitleSection></Header>
                    <Body>
                        <ContainerDoc>
                            <CardMenu>
                                <ul>
                                    {
                                        sec.menu.map((item, index)=>{
                                            return <li key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                            </CardMenu>
                            <ContainerImages>
                                {
                                    sec.images.map((image, index)=>{
                                        return <img key={index} src={image} alt="" />
                                    })
                                }
                            </ContainerImages>
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
    @media (max-width: 600px){
        justify-content: center;
    }
`;

const ContainerImages = styled.div`
    width: 50%;
    display: flex;
    img{
        scale: .6;
        &:nth-child(1){
            transform: translate3d(-120px, -120px, 0px);
        }
        &:nth-child(2){
            transform: translate3d(-520px, 150px, 0px);

        }
    }
    @media (max-width: 1004px){
        img{
            scale: .5;
            &:nth-child(1){
                transform: translate3d(-250px, -250px, 0px);
            }
            &:nth-child(2){
                transform: translate3d(-1050px, 150px, 0px);
    
            }
        }
    }
    @media (max-width: 718px){
        img{
            scale: .5;
            &:nth-child(1){
                transform: translate3d(-450px, -250px, 0px);
            }
            &:nth-child(2){
                transform: translate3d(-1200px, 150px, 0px);
    
            }
        }
    }
    @media (max-width: 600px){
        img{
            scale: .5;
            &:nth-child(1){
                transform: translate3d(-450px, -250px, 0px);
            }
            &:nth-child(2){
                transform: translate3d(-1200px, 250px, 0px);
    
            }
        }
    }
    @media (max-width: 408px){
        img{
            scale: .4;
            &:nth-child(1){
                transform: translate3d(-580px, -250px, 0px);
            }
            &:nth-child(2){
                transform: translate3d(-1500px, 250px, 0px);
    
            }
        }
    }
`;

export default Especiales;