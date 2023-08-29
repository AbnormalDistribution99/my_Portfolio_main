import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[black] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/eafb64c9-1759-4d82-a461-e4bf72bfdfe4' className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-purple-600 font-serif'>Contact</p>
                <p className='text-white py-4'>Submit the form below</p>
                <p className='text-white py-4'>Send me an E-mail: abhishekregmi46@gmail.com</p>
            </div>
                <input clasname='bg-[white] p-2' type='Text' placeholder='Name' name='name'/>
                <input classname='my-4 p-2 bg-[white]' type='email' placeholder='Email' name='E-mail'/>
                <textarea className='bg-[white] py-3 my-8' name='message' rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#af3ae1] hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact