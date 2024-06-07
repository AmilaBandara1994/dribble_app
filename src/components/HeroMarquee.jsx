import React from 'react'
import HeroMarqueeItem from './HeroMarqueeItem'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const HeroMarquee = ({heroMarque}) => {

  
  return (
    <div className='flex gap-x-8 my-4'>
      {  heroMarque.map((hero)=>(
          <HeroMarqueeItem key={hero.id} name={hero.name} position={hero.position} img={hero.image} tags={hero.tags}/> 
        ))      
      }

    </div>
  ) 
}

export default HeroMarquee