import { Header, Body, Container } from '../../../elementos/Header-section';
import TitleSection from '../../../elementos/Title-section';
import Sections from '../data/sectionData';

const Desayunos = () => {
    const section = Sections.filter( sec => sec.id === 2 );

    return (
        section.map((sec)=>{
            return(
                <Container>
                    <Header><TitleSection>{ sec.title }</TitleSection></Header>
                    <Body>
                        <p>Aqui hay desayunos</p>
                    </Body>
                </Container>
            );
        })
    );
}
 
export default Desayunos;