import React from 'react'
import AWS from '../assests/aws.png'
import Keras from '../assests/keras.png'
import Numpy from '../assests/numpy.png'
import Opencv from '../assests/Opencv.png'
import Pandas from '../assests/pandas.png'
import Pytorch from '../assests/pytorch.png'
import Seaborn from '../assests/seaborn.png'
import Sklearn from '../assests/sklearn.png'
import Tensorflow from '../assests/tensorflow.png'
import SQL from '../assests/sql.png'
import Python from '../assests/python.webp'
import Jupyter from '../assests/jupyter.png'
import JavaScript from '../assests/javascript.png'
import ReactJS from '../assests/reactjs.webp'
import PowerBI from '../assests/powerbi.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[black] text-white font-serif'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div classname='pb-8'>
                <p className='text-4xl font-bold inline text-purple-600'>
                    Skills
                </p>
                <p className='py-4'>
                    These are the technology stack I have worked with
                </p>
            </div>
                <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt='AWS Icon'/>
                        <p className='my-4 text-green-400'>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Keras} alt='Keras Icon'/>
                        <p className='my-4 text-green-400'>Keras</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Numpy} alt='Numpy Icon'/>
                        <p className='my-4 text-green-400'>Numpy</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Opencv} alt='Opencv Icon'/>
                        <p className='my-4 text-green-400'>Opencv</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Pandas} alt='Pandas Icon'/>
                        <p className='my-4 text-green-400'>Pandas</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Pytorch} alt='Pytorch Icon'/>
                        <p className='my-4 text-green-400'>Pytorch</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Seaborn} alt='Seaborn Icon'/>
                        <p className='my-4 text-green-400'>Seaborn</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Sklearn} alt='Sklearn Icon'/>
                        <p className='my-4 text-green-400'>Sklearn</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tensorflow} alt='Tensorflow Icon'/>
                        <p className='my-4 text-green-400'>Tensorflow</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={SQL} alt='SQL Icon'/>
                        <p className='my-4 text-green-400'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt='Python Icon'/>
                        <p className='my-4 text-green-400'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Jupyter} alt='Jupyter Icon'/>
                        <p className='my-4 text-green-400'>Jupyter Notebook</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript Icon'/>
                        <p className='my-4 text-green-400'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactJS} alt='ReactJS Icon'/>
                        <p className='my-4 text-green-400'>React JS</p>
                    </div>
                    <div className='shadow-md shadow-[#501750] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PowerBI} alt='PowerBI Icon'/>
                        <p className='my-4 text-green-400'>Power BI</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Skills