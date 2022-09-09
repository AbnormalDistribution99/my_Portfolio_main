import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000] font-serif'>
        {/* Container */}
        <div className='mx-0 lg:mx-60 px-8 flex flex-col justify-center h-full'>
            <div className='text-white text-3xl md:text-5xl mt-5'>
                <h2>Hi, I am Abhishek</h2>
                <h2>An aspiring </h2> 
                <h2 className='text-purple-600 text-3xl md:text-5xl'> Data Scientist /</h2> 
                <h2 className='text-purple-600 text-3xl md:text-5xl'> Machine Learning Engineer.</h2> 
                <p className='text-white text-xl mt-5'>Machine Learning, Deep Learning & Computer Vision</p>
            </div>
            <div>
                
                <button className='text-white group font-sans border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover: border-purple-600 mt-5'>
                    <Link to="work" spy={true} smooth={true} duration={500}>
                        View Work 
                    </Link>
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml'/>
                </span></button>
            </div>
            </div>
        </div>
  )
}

export default Home