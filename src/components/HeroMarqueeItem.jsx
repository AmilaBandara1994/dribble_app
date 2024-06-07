import React from 'react'

const HeroMarqueeItem = ({name="John Deo", position="UX/UI Designer" , img='mercedes-bazan.webp', video=true, tags=['mobile','ux','web'] }) => {
  const fetchedUrl = `url(/src/assets/images/${img})` ;
  return (
    <div className="rounded-3xl flex items-end justify-startw-72 w-72 h-96 "
    style={{
      backgroundImage: fetchedUrl,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover'
    }}>

      {/* <video src='https://cdn.dribbble.com/uploads/47181/original/1e3a73a174484bef522b620c401cd00a.mp4?1685645427'className='object-cover  h-screen w-72 h-96' loop autoPlay  muted></video> */}
        <div className="">
          <div className="flex flex-col capitalize font-sans text-nowrap  justify-start font-serif text-white p-6">
            <h4 className="text-base ">{name}</h4>
            <h4 className="text-base ">{position}</h4>
            <div className="flex  items-center justify-start gap-x-3 text-xs mt-2">
              {
                tags.map((tag, index)=>(
                  <div key={index} className="rounded-3xl  border border-gray-50 px-3 py-0.5 ">{tag}</div>
                    
                ))
              }
            </div>
          </div>     
        </div>
      
    </div>
  )
}

export default HeroMarqueeItem