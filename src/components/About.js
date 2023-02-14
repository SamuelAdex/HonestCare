import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import CUSTOMIZE from "../assets/img/customize.png";
import ENJOY from "../assets/img/enjoy.png";
import PAYMENT from "../assets/img/payment.png";
import RECTANGLE from "../assets/img/rectangle.png";
import { Header } from './Header';


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
            <div className="h-full md:h-screen bg-gray relative pb-10">
                {/* Background */}
                <img src={RECTANGLE} alt="" className='md:absolute bottom-0 w-screen' />
                <div className="w-[85vw] mx-auto pt-10">
                    <Header title={'How it works'} subtitle={'Offering the best self service, you need to shop for your champ.'} />
                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-10 text-center md:w-[70vw] mx-auto mt-10 md:absolute z-20 left-0 right-0">
                        {
                            CARDS.map((CARD, i) => {
                                return (
                                    <div className='pb-10 px-10 bg-white rounded-lg flex flex-col  justify-between' key={i}>
                                        <div className='flex flex-col gap-10'>
                                            <img src={CARD.src} alt="png" className='w-52 mx-auto' />
                                        </div>
                                        <p>Step {CARD.step}</p>
                                        <p className='font-bold'>{CARD.title}</p>
                                        <p>{CARD.caption}</p>
                                        <Link to='/brand' className='border border-red text-white bg-red py-2 px-4 rounded-lg flex items-center gap-2 md:mx-auto text-center justify-center mt-10 text-[16px]'>{CARD.btnText} <BsArrowRight fontSize={'1.2em'} /></Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
