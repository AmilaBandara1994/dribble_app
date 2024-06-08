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
      breakpoint: { max: 4000, min: 2800 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 2800, min: 1448 },
      items: 7
    },
    laptopLg: {
      breakpoint: { max: 1448, min: 1024 },
      items: 4
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobilelg:{
      breakpoint: { max: 464, min: 320 },
      items: 1
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
      removeArrowOnDeviceType={["tablet", "mobile","mobilelg","desktop", "laptop","laptopLg","superLargeDesktop"]}
      >
        {  heroMarque.map((hero)=>(
            <HeroMarqueeItem key={hero.id} video={hero.video} name={hero.name} position={hero.position} img={hero.image} tags={hero.tags}/> 
          ))      
        }  
      </Carousel>
    </div>
  ) 
}

export default HeroMarquee