import React from 'react'

const HeroMarqueeItem = ({name="John Deo", position="UX/UI Designer" , img='',
   video='', 
  tags=['mobile','ux','web']}) => {
  const fetchedUrl = `url(/src/assets/images/${img})` ;
  return (
    <>
      <div  className="rounded-3xl slide w-[273px] h-[340px]"
      style={{
        backgroundImage: img !== '' ? fetchedUrl : '',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        position:'relative'
      }}>

            <video autoPlay loop muted className='rounded-3xl'
              style={{
                width:'100%',
                height:'100%',
                position: 'absolute',
                objectFit: 'cover',
                zIndex: 1,
              }}
             >
              <source src={video}  type='video/mp4'/>
              </video> 
            

          <div className="flex items-end justify-start "
            style={{
              width:'100%',
              height:'100%',
              // position:'relative'
            }}
          >
            
            <div className="flex flex-col capitalize font-sans text-nowrap z-10 justify-start font-arial text-white p-6">
              <h4 className="text-base ">{name}</h4>
              <h4 className="text-base ">{position}</h4>
              <div className="flex  items-center justify-start gap-x-2 text-xs mt-2">
                {
                  tags.map((tag, index)=>(
                    <div key={index} className="rounded-3xl  border border-gray-50 px-3 py-0.5 ">{tag}</div>
                      
                  ))
                }
              </div>
            </div>    
          </div>
          
       
      </div>    

    </>
  )
}

export default HeroMarqueeItem;