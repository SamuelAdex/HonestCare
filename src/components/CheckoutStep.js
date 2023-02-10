import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

import {Button} from './Button'


export const CheckoutStep = ()=>{
    return (
        <div className="fixed right-0 left-0 bottom-0 grid place-items-center z-6">
            <div className="flex justify-around w-full items-center bg-white shadow-lg p-3">
                <div className="flex gap-2 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 font-bold rounded-full">1</span>
                    <span className="text-[14px]">BRAND</span>
                </div>
                <div className="flex gap-2 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 font-bold rounded-full">2</span>
                    <span className="text-[14px]">SIZE</span>
                </div>
                <div className="flex gap-2 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 font-bold rounded-full">3</span>
                    <span className="text-[14px]">WIPES</span>
                </div>
                <div className="flex gap-2 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 font-bold rounded-full">4</span>
                    <span className="text-[14px]">CHECKOUT</span>
                </div>
                <Button value="Continue Shopping" type="outlined" icon={<BsArrowRight fontSize="1.5rem" />} />
            </div>
        </div>
    )
}