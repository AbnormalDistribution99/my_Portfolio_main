import React from 'react';
import CarPrice from '../assests/carpriceprediction.png'
import CNN from '../assests/cnnimageclassification.png'
import DiabetesPrediction from '../assests/diabetesprediciton.png'
import EDA from '../assests/eda.png'
import MLCAS from '../assests/MLCAS.png'
import YOLO from '../assests/yolo.png'
import DogClassification from '../assests/cnnclassification.png'
import TransferLearning from '../assests/transferlearning.png'
import GansMNIST from '../assests/mnist.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-[black]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-purple-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${CarPrice})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                Car Price Prediction
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/AbnormalDistribution99/Car-Price-Prediction">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${CNN})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                Image Classification
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/AbnormalDistribution99/Transfer_Learning_VGG16_Classification">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${DiabetesPrediction})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
              Diabetes Prediction
              </span>
              <div className='pt-8 text-center'>
                <a href="https://diabetespredicted.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AbnormalDistribution99/Diabetes_Predicition_End_to_End_ML">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${EDA})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                 Exploratory Data Analysis
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/AbnormalDistribution99/EDA_Crop_Yield">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${MLCAS})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                MLCAS Competition
              </span>
              <div className='pt-8 text-center'>
                <a href="https://diabetespredicted.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AbnormalDistribution99/LSTM-7.01">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            
             {/* Grid Item */}
        <div
            style={{ backgroundImage: `url(${YOLO})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                Object Detection YOLO
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
        </div>

         {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${DogClassification})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
              Dog Breed Classification.
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/AbnormalDistribution99/Dog_Breed_Classification">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${TransferLearning})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                Transfer Learning VGG-16
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/AbnormalDistribution99/Transfer_Learning_VGG16_Classification">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
        </div>
        {/* Grid Item */}
        <div
            style={{ backgroundImage: `url(${GansMNIST})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
              MNIST DataGeneration
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/AbnormalDistribution99/GANs_MNIST_Data_Generation">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-purple-600 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;