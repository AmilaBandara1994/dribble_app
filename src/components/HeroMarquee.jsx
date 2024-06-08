import React from 'react'
import HeroMarqueeItem from './HeroMarqueeItem'
import 'react-multi-carousel/lib/styles.css';



const HeroMarquee = ({heroMarque}) => {
  
  return (
    <div className='my-4 slider'>
        <div className='my-4 slider-track'>
         
            {  heroMarque.map((hero)=>(
                <HeroMarqueeItem key={hero.id} video={hero.video} name={hero.name} position={hero.position} img={hero.image} tags={hero.tags}/> 
              ))      
            }  
            {  heroMarque.map((hero)=>(
                <HeroMarqueeItem key={hero.id} video={hero.video} name={hero.name} position={hero.position} img={hero.image} tags={hero.tags}/> 
              ))      
            }  
        </div>
    </div>
  ) 
}

export default HeroMarquee