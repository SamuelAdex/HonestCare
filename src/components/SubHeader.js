import React from 'react'

import pam from '../assets/img/image 72.png'
import baby from '../assets/img/image 70.png'


const SubHeader = ()=>{
    return (
        <div className="h-[301px] mt-4 bg-[#C1C0BE] w-full flex justify-between items-center">
            <div className="flex-2 md:flex hidden">
                <img src={pam} alt=""/>
            </div>
            <div className="p-2 flex-1">
                <div className="bg-white rounded-lg text-center p-5">
                    <h1 className="font-bold md:text-5xl text-[21px] text-red mb-4">A personalized Bundle Subscription Just For You</h1>
                    <p className="md:text-[16px] text-[12px]">Depending on your subscription plan, you will receive a luxurious bundle coupled with significant savings on your baby's preferred brands and a few surprises sent directly to your home.</p>
                </div>
            </div>
            <div className="flex-2 md:flex hidden">
                <img src={baby} alt=""/>
            </div>
        </div>
    )
}


export default SubHeader