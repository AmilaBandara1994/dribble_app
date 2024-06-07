import React from 'react'
import HeroMarqueeItem from './HeroMarqueeItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HeroMarquee = ({heroMarque}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll:1
  };
  
  return (
    <div className='my-4'>
      <Slider {...settings}>
        {  heroMarque.map((hero)=>(
            <HeroMarqueeItem key={hero.id} name={hero.name} position={hero.position} img={hero.image} tags={hero.tags}/> 
          ))      
        }  
      </Slider>
    </div>
  ) 
}

export default HeroMarquee