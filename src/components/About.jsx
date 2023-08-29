import React from 'react'

const About = () => {
  return (
    <div name='about' classname='w-full md:h-[400px] bg-[black] text-white font-serif'>
        <div className=' bg-[#000000]  text-white flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] mx-auto p-4 grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl text-purple-600 font-bold font-serif'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:flex gap-10 px-2'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>I'm glad that you are here.</p>
                    </div>
                    <div>
                        <p>
                        I've worked on projects including computer vision, regression, classification and clustering. 
                        Because this is a learning process, I keep myself engaged and up to date by reading
                        new research papers on AI, ML, and DL. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About