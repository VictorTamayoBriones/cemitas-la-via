import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import one from '../../images/slider-1.png';
import two from '../../images/slider-2.jpeg';
import three from '../../images/slider-3.jpeg';
import styled from 'styled-components';
import BannerSlider from "../../elementos/Banner-slider";

const Slider = () => {

    return (
        <Carousel 
                showStatus={false} showThumbs={false} showArrows={false} 
                autoPlay={true} interval={3000} infiniteLoop={true}  transitionTime={500} >
            <ImageContainer>
                <img src={one} alt="" />
            </ImageContainer>
            <ImageContainer>
                <BannerSlider>
                    <p>Milanesa de Pollo</p>
                    <p>Y variedad de platillos a la carta</p>
                </BannerSlider>
            
                <img src={two} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={three} alt="" />
            </ImageContainer>
        </Carousel>
    );
}

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    img{
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
    @media (max-width: 1000px){
        height: 300px;
    }
`;

export default Slider;