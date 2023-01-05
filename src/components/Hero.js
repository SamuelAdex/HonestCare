import React from 'react'
import { NavLink } from 'react-router-dom';
// Icons ====================>>>>>>>>>>>>>>>>
import { BsArrowRight } from 'react-icons/bs'
//============================>>>>>>>>>>>>>>>>
// Images ====================>>>>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
import Blob1 from "../assets/img/bg1.png";
import Blob2 from "../assets/img/bg2.png";
import Blob3 from "../assets/img/bg3.png";
import BottomBlobs from "../assets/img/bottomBlobs.png";
//============================>>>>>>>>>>>>>>>>

export default function Hero() {
    return (
        <div className='h-[75vh] md:h-[110vh] max-w-screen bg-pink pt-20 relative'>
            <div className="w-[85vw] mx-auto pt-10 text-center absolute z-20 left-0 right-0">
                <div className=' flex gap-5 flex-col mb-10'>

                    <h1 className='font-extrabold text-[2em] md:text-5xl md:w-[66%] text-start md:text-center mx-auto'>Your new champs deserves a new concept of comfort</h1>
                    <p className='text-xl md:text-2xl md:w-[40%] text-start md:text-center mx-auto'>More than just for diapers and wipes, you are in for the big savings too!</p>

                </div>
                <NavLink to='#' className='border border-red text-white bg-red py-3 rounded-lg font-bold flex items-center gap-2 w-[287px] md:mx-auto text-center justify-center'>Customize a Bundle now <BsArrowRight fontSize={'1.2em'} /></NavLink>

            </div>
            {/* Hero image */}
            <img src={heroImg} alt="heroImg" className='absolute bottom-0 md:w-[80%] md:right-[10em] z-20' />
            {/* Backgrounds blobs */}
            <img src={BottomBlobs} alt="" className='absolute bottom-0 z-10' />
            <img src={Blob1} alt="" className='absolute top-56 z-10' />
            <img src={Blob2} alt="" className='absolute bottom-64 z-10 right-52' />
            <img src={Blob3} alt="" className='absolute top-72 z-10 right-36' />
            <img src={Blob3} alt="" className='absolute top-20 z-10 right-72' />
        </div>
    )
}
