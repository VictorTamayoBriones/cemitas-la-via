import styled from 'styled-components';
import Textura from '../../images/textura.svg';
import TitleSection from '../Title-section';
import Sections from '../../components/Section-menu/data/sectionData';

const HeaderSection = () => {
    return (
        <> 
            {
                Sections.map(({title, images})=>{
                    return(
                        <>
                            <Header>
                                <TitleSection>{title}</TitleSection>
                            </Header>
                            <Body>
                                {images.map((image)=>{
                                    return <img src={image} alt="" />
                                })}
                            </Body>
                        </>
                    );
                })
            }
        </>
    );
}

const Header = styled.div`
    width: 100%;
    padding: 8px 0px;
    background-image: url(${Textura});
`;

const Body = styled.div`
    width: 100%;
    background: rgba(224,169,38,1);
    background: linear-gradient(0deg, rgba(255,255,255,.5) 0%, rgba(224,169,38,1) 89%);
    padding: 30px;
`;

export default HeaderSection;