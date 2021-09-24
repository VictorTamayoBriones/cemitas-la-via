import styled from 'styled-components';
import theme from '../../theme';

const BannerAboutMenu = () => {
    return (  
        <Banner>
            <h2>Un nuevo menú todos los días pregunta por el</h2>
        </Banner>
    );
}

const Banner = styled.div`
    width: 100%;
    background: ${ theme.rojo };
    color: #fff;
    padding: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 64px;
        display: inline-block;
        width: 80%;
        letter-spacing: 5px;
        text-align: center;
    }

    @media (max-width: 1000px){
        h2{
            font-size: 50px;
            letter-spacing: 3px;
        }
    }

    @media (max-width: 700px){
        h2{
            font-size: 30px;
            letter-spacing: 2px;
        }
    }

    @media (max-width: 424px){
        h2{
            font-size: 25px;
            letter-spacing: 1.5px;
        }
    }
`;

export default BannerAboutMenu;