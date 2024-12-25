import React from 'react'
import img from '../../assets/pic.png';


const MoreAbout = () => {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center ' >
         <div className=' w-[1000px] h-[800px] flex justify-center  gap-10' > 
            <div className='w-[600px] h-[300px]' >
                    <img src={img} alt="" />
            </div>
            <div>
                <h2>React Front-end Developer</h2>
                <p>Khadim excels at crafting responsive designs, <br /> implementing dynamic features, and delivering <br /> high-quality solutions.</p>
            </div>
         </div>
    </div>
  )
}

export default MoreAbout