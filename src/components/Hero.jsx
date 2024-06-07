import React, {useState,useEffect} from 'react'
import HeroMarquee from './HeroMarquee'

const Hero = () => {
  const [heroMarqu, setHeroMarqu]  = useState([]);
  const [loading, setLoading] = useState(true);

  let bgcolors =['#bbf7d0','#d9f99d','#fcd34d','#fef08a','#fca5a5', ];
  let colorIndex= 0;
  let bgcolor='';

  
  // const  changecolor  = ()=>{
  //   bgcolor = bgcolors[colorIndex];
  //   if(colorIndex === bgcolors.length-1) colorIndex =0;  
  //   console.log(bgcolor);  
  //   colorIndex++;

  //   setTimeout(changecolor(), 3000);
  // }
  // changecolor();



  useEffect(() =>{
    const fetchHeroData = async () => {
      try {
        setHeroMarqu([
          {id: 1, name:'chris owens',position:'product designer', image:'mercedes-bazan.webp', tags:['UX', 'web', 'product']},
          {id: 2, name:'dan mole',position:'digital designer', image:'Vladimir_Gruev.webp', tags:['brand', 'design', 'product']},
          {id: 3, name:'daniele buffa',position:'illustrator', image:'chris_ownes.webp', tags:['mobile', 'web', 'web']},
          {id: 4, name:'helen tran',position:'lead product designer', image:'ellif.webp', tags:['web', 'mobile', 'UX']},
          {id: 5, name:'victa whille',position:'creative designer', image:'chris_ownes.webp', tags:['mobile', 'web', 'UI']},
          {id: 6, name:'mercedes bazan',position:'brand designer', image:'Vladimir_Gruev.webp', tags:['illustration', 'brand', 'product']},
          {id: 7, name:'jessse showalter',position:'design director', image:'austia.webp', tags:['graphic design', 'web']},
          {id: 8, name:'elif kamesogulu',position:'brand + illustrator', image:'ellif.webp', tags:['leadership', 'product', 'UX']},
          {id: 9, name:'aurelien salomon',position:'design educator', image:'Andrea.webp', tags:['design', 'web', 'product']},
          {id: 10, name:'lilla bardenova',position:'lead illustrator', image:'chris_ownes.webp', tags:['mobile', 'web', 'UX']},
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