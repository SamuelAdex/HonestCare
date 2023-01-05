import React from 'react'
import { NavLink } from 'react-router-dom';
// Icons ====================>>>>>>>>>>>>>>>>
import { BsArrowRight } from 'react-icons/bs'
//============================>>>>>>>>>>>>>>>>
// Images ====================>>>>>>>>>>>>>>>>
import CUSTOMIZE from "../assets/img/customize.png";
import ENJOY from "../assets/img/enjoy.png";
import PAYMENT from "../assets/img/payment.png";
//============================>>>>>>>>>>>>>>>>


export default function About() {
    // Cards ===================>>>>>>>>>>>>>>
    const CARDS = [
        {
            id: 1,
            step: 1,
            src: CUSTOMIZE,
            title: 'Customize',
            caption: 'Customize the best diapers and wipes bundle from your favorite brands on our catalogue.',
            Link: '/',
            btnText: 'Customize a Bundle now'
        },
        {
            id: 2,
            step: 2,
            src: PAYMENT,
            title: 'Payments ',
            caption: 'You have the flexbility to choose which payment gateway you want to use.',
            Link: '/',
            btnText: 'Make payment now'
        },
        {
            id: 3,
            step: 3,
            src: ENJOY,
            title: 'Enjoy ',
            caption: 'Your bundle will arrives within a week, so you get to enjoy your personal picks ASAP!',
            Link: '/',
            btnText: 'Check out to delivery'
        },
    ]
    //==========================>>>>>>>>>>>>>>


    return (
        <>
            <div className="md:h-[100vh] bg-gray relative">
                <div className="w-[85vw] mx-auto pt-10  h-full">
                    <div>
                        <h1 className='font-extrabold text-[2em] md:text-5xl text-center mx-auto mb-3'>How it works</h1>
                        <p className='text-xl md:text-xl text-center mx-auto'>Offering the best self service, you need to shop for your champ.</p>
                    </div>
                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-10 text-center w-[70vw] mx-auto mt-10">
                        {
                            CARDS.map((CARD, i) => {
                                return (
                                    <div className='p-10 bg-white rounded-lg' key={i}>
                                        <div className='flex flex-col gap-1'>
                                            <img src={CARD.src} alt="png" className='w-25' />
                                            <p>step {CARD.step}</p>
                                            <p className='font-bold'>{CARD.title}</p>
                                            <p>{CARD.caption}</p>
                                        </div>
                                        <NavLink to='#' className='border border-red text-white bg-red py-2 rounded-lg flex items-center gap-2 md:mx-auto text-center justify-center mt-10'>Customize a Bundle now <BsArrowRight fontSize={'1.2em'} /></NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-100 bg-pink h-[20em] absolute bottom-0 z-20"></div>
            </div>
        </>
    )
}
