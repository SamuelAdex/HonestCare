import React from 'react'
import { NavLink } from 'react-router-dom';
// Images ====================>>>>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
//============================>>>>>>>>>>>>>>>>

export default function Hero() {
    return (
        <div className='h-[100vh] w-screen bg-pink pt-20 relative'>
            <div className="w-[85vw] mx-auto h-full pt-10 text-center">
                <div className=' flex gap-5 flex-col mb-10'>

                    <h1 className='font-extrabold text-5xl w-[66%] text-center mx-auto'>Your new champs deserves a new concept of comfort</h1>
                    <p className='text-2xl w-[40%] text-center mx-auto'>More than just for diapers and wipes, you are in for the big savings too!</p>

                </div>
                <NavLink to='#' className='border border-red text-white bg-red py-3 px-10 rounded-lg font-bold'>Customize a Bundle now</NavLink>
            </div>
            <img src={heroImg} alt="heroImg" className='absolute bottom-0 w-[70%] right-[15em]' />
        </div>
    )
}
