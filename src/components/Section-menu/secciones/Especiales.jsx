import { Header, Body, Container } from '../../../elementos/Header-section';
import TitleSection from '../../../elementos/Title-section';
import Sections from '../data/sectionData';

const Especiales = () => {
    const section = Sections.filter( sec => sec.id === 3 );

    return (  
        section.map((sec)=>{
            return(
                <Container>
                    <Header><TitleSection>{ sec.title }</TitleSection></Header>
                    <Body>
                        <p>Aqui hay especiales</p>
                    </Body>
                </Container>
            );
        })
    );
}
 
export default Especiales;