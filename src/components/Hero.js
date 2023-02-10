import React from 'react'
// Icons ====================>>>>>>>>>>>>>>>>
import { BsArrowRight } from 'react-icons/bs'
//============================>>>>>>>>>>>>>>>>
// Images ====================>>>>>>>>>>>>>>>>
import heroImg from "../assets/img/heroImg.png";
import Blob1 from "../assets/img/bg1.png";
import Blob2 from "../assets/img/bg2.png";
import Blob3 from "../assets/img/bg3.png";
import BottomBlobs from "../assets/img/bottomBlobs.png";
import { Header } from './Header';
import { Button } from './Button';
//============================>>>>>>>>>>>>>>>>

export default function Hero() {
    return (
        <div className='h-[100vh] md:h-[110vh] max-w-screen bg-pink pt-20 relative'>
            {/* Hero image */}
            <img src={heroImg} alt="heroImg" className='absolute bottom-0 md:w-[80%] md:right-[10em] z-20' />

            <div className="w-[85vw] mx-auto pt-10 absolute z-20 left-0 right-0">
                <Header title={'Your new champs deserves a new concept of comfort'} subtitle={'More than just for diapers and wipes, you are in for the big savings too!'} />
                <Button value={'Customize a Bundle now'} path="/brand" className='mt-20 md:mt-0 w-[300px] flex items-center gap-2 py-3 md:mx-auto' icon={<BsArrowRight />} />
            </div>

            {/* Backgrounds blobs */}
            <img src={BottomBlobs} alt="" className='absolute bottom-0 z-10' />
            <img src={Blob1} alt="" className='absolute top-56 z-10' />
            <img src={Blob2} alt="" className='absolute bottom-64 z-10 right-52' />
            <img src={Blob3} alt="" className='absolute top-72 z-10 right-36' />
            <img src={Blob3} alt="" className='absolute top-20 z-10 right-72' />
        </div>
    )
}
