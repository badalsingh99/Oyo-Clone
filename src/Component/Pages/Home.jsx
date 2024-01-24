import React from 'react'
import Header2 from '../Header2'
import Header3 from '../Header3'
import Section from '../Section'
import Header4 from '../Header4'
import Banner3 from  "../../images/banner3.avif"
import Banner4 from "../../images/banner4.avif"

const Home = () => {
  return (
    <div>
        <Header2/>
         <Header3/>
         <div className='mx-20 '>
            <div className="my-14 border-none rounded-lg">
              <img src={Banner3} alt="banner3" width={200} height={200} className='h-60 rounded-lg w-full'/>
            </div>
            <div className='bg-gray-100 border rounded-lg'>
              <div className='mb-2 flex my-2 '>
                <img src={Banner4} alt="banner4" width={200} height={200} className=' h-30 w-full'/>
              </div>
            </div>
            <div>
                  <Header4 />
            </div>
          
         </div>
        
          <Section/>
    </div>
  )
}

export default Home;