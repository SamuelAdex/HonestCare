import React from 'react'
import { NavLink } from 'react-router-dom';
// Icons ====================>>>>>>>>>>>>>>>>
import { BsArrowRight } from 'react-icons/bs'
//============================>>>>>>>>>>>>>>>>
// Images ====================>>>>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
import BottomBlobs from "../assets/img/bottomBlobs.png";
//============================>>>>>>>>>>>>>>>>

export default function Hero() {
    return (
        <div className='h-[110vh] max-w-screen bg-pink pt-20 relative'>
            <div className="w-[85vw] mx-auto h-full pt-10 text-center">
                <div className=' flex gap-5 flex-col mb-10'>

                    <h1 className='font-extrabold text-5xl w-[66%] text-center mx-auto'>Your new champs deserves a new concept of comfort</h1>
                    <p className='text-2xl w-[40%] text-center mx-auto'>More than just for diapers and wipes, you are in for the big savings too!</p>

                </div>
                <NavLink to='#' className='border border-red text-white bg-red py-3 rounded-lg font-bold flex items-center gap-2 w-[287px] mx-auto text-center justify-center'>Customize a Bundle now <BsArrowRight fontSize={'1.2em'} /></NavLink>

            </div>
            {/* Hero image */}
            <img src={heroImg} alt="heroImg" className='absolute bottom-0 w-[80%] right-[11em] z-20' />
            {/* Backgrounds blobs */}
            <img src={BottomBlobs} alt="" className='absolute bottom-0 z-10' />
        </div>
    )
}
