import { Header, Body, Container } from '../../../elementos/Header-section';
import TitleSection from '../../../elementos/Title-section';
import Sections from '../data/sectionData';
import styled from 'styled-components';
import { CardMenu } from '../../../elementos/Card-content-menu';

const Desayunos = () => {
    const section = Sections.filter( sec => sec.id === 2 );

    return (
        section.map((sec)=>{
            return(
                <Container key={sec} >
                    <Header><TitleSection>{ sec.title }</TitleSection></Header>
                    <Body>
                        <ContainerDoc>
                            <ContainerImages>
                                {
                                    sec.images.map((img)=>{
                                        return <img src={img} key={img}  alt="" />
                                    })
                                }
                            </ContainerImages> 
                            <CardMenu>
                                <ul>
                                    {
                                        sec.menu.map((item)=>{
                                            return <li key={item} >{item}</li>
                                        })
                                    }
                                </ul>
                            </CardMenu>
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
    @media (max-width: 716px){
        justify-content: center;
    }
`;

const ContainerImages = styled.div`
    width: 50%;
    img{
        scale: .7;
        margin: -65px 0px;
        &:nth-child(2){
            transform: translateX(350px);
        }
    }
    @media (max-width: 1000px){
        img{
            margin: -60px 0px;
            &:nth-child(2){
                transform: translateX(0px);
            }
        }
    }
    @media (max-width: 666px){
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    @media (max-width: 600px){
        img{
            scale: .3;
            margin: -120px 0px;
            transform: translateX(-130%);
            &:nth-child(3){
                transform: translateX(100%);
            }
        }
    }
    @media (max-width: 500px){
        img{
             margin: -100px 0px;
             scale: .3;
        }
    }
    @media (max-width: 430px){
        img{
            margin: -80px 0px;
        }
    }
    @media (max-width: 384px){
        img{
            margin: -60px 0px;
        }
    }
`;

export default Desayunos;