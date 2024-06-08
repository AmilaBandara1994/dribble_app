import React, {useState,useEffect} from 'react'
import HeroMarquee from './HeroMarquee'

const Hero = () => {
  const [heroMarqu, setHeroMarqu]  = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() =>{
    const fetchHeroData = async () => {
      try {
        setHeroMarqu([
          {id: 1, name:'chris owens',position:'product designer', video:'', image:'mercedes-bazan.webp', tags:['UX', 'web', 'product']},
          {id: 2, name:'dan mole',position:'digital designer', video:'', image:'Vladimir_Gruev.webp', tags:['brand', 'design', 'product']},
          {id: 3, name:'daniele buffa',position:'illustrator', video:'https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427', image:'', tags:['mobile', 'web', 'web']},
          {id: 4, name:'helen tran',position:'lead product designer', video:'', image:'ellif.webp', tags:['web', 'mobile', 'UX']},
          {id: 5, name:'victa whille',position:'creative designer', video:'https://cdn.dribbble.com/uploads/47179/original/35d07cfebd303e05e688078015da0cc2.mp4?1685645373', image:'chris_ownes.webp', tags:['mobile', 'web', 'UI']},
          {id: 6, name:'mercedes bazan',position:'brand designer', video:'', image:'Vladimir_Gruev.webp', tags:['illustration', 'brand', 'product']},
          {id: 7, name:'jessse showalter',position:'design director', video:'', image:'austia.webp', tags:['graphic design', 'web']},
          {id: 8, name:'elif kamesogulu',position:'brand + illustrator', video:'', image:'ellif.webp', tags:['leadership', 'product', 'UX']},
          {id: 9, name:'aurelien salomon',position:'design educator', video:'https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402', image:'Andrea.webp', tags:['design', 'web', 'product']},
          {id: 10, name:'lilla bardenova',position:'lead illustrator', video:'', image:'chris_ownes.webp', tags:['mobile', 'web', 'UX']},
        ]);     
      } catch (error) {
        console.log('Error fetching data ', error);
      }finally{
        setLoading(false);
      }
    }
    fetchHeroData();
  },[]);
  return (
    <section className="my-5">
      <div className=" flex flex-col items-center justify-center">
          <div className="flex items-center justify-center text-center w-11/12 lg:w-8/12 md:w-10/12 ">
              <div className="flex flex-col items-center justify-center ">
                  <div className="change_color rounded-full  px-[16px] py-[10px]">
                      <a href="#" className='text-lg font-mono font-semibold' >
                          Over 3 million ready-to-work creatives!
                      </a>
                  </div>
                  <h1 className='text-5xl md:text-7xl font-serif  my-10 '>The world’s destination for design</h1>
                  <h3 className="text-lg md:text-xl"> Get inspired by the work of millions of top-rated designers & agencies around the world.</h3>
              </div>
          </div>
          <button className='bg-black text-base md:text-lg text-white px-6 py-4 m-4 rounded-full'>Get Started</button>
      </div>
 
        <div className="">          
              <HeroMarquee heroMarque={heroMarqu} />          
        </div>
    </section>
  )
}

export default Hero