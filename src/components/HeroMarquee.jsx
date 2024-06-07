import React from 'react'
import HeroMarqueeItem from './HeroMarqueeItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const HeroMarquee = ({heroMarque}) => {
  const settings = {
    dots: false,
    pauseOnHover:false,
    infinite: true,
    autoplay:true,
    speed: 200,
    slidesToShow:4,
    slidesToScroll:1
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1448 },
      items: 7
    },
    laptop: {
      breakpoint: { max: 1448, min: 768 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    },
    mobilelg:{
      breakpoint: { max: 464, min: 320 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className='my-4'>
      <Carousel 
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={500}
      focusOnSelect={false} 
      keyBoardControl={false}
      customTransition="5s"
      transitionDuration={3000}
      removeArrowOnDeviceType={["tablet", "mobile","mobilelg","desktop", "laptop","superLargeDesktop"]}
      >
        {  heroMarque.map((hero)=>(
            <HeroMarqueeItem key={hero.id} name={hero.name} position={hero.position} img={hero.image} tags={hero.tags}/> 
          ))      
        }  
      </Carousel>
    </div>
  ) 
}

export default HeroMarquee