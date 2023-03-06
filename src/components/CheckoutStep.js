import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

import {Button} from './Button'


export const CheckoutStep = ({setIsOpen})=>{
    return (
        <div className="fixed right-0 left-0 bottom-0 grid place-items-center z-6">
            <div className="flex justify-around w-full items-center bg-white shadow-lg md:p-3 py-5">
                <Link to='/brand' className="flex gamd:p-2 gap-1 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 md:font-bold rounded-full">1</span>
                    <span className="md:text-[14px] text-[12px]">BRAND</span>
                </Link>
                <Link to='/size' className="flex gapmd:-2 gap-1 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 md:font-bold rounded-full">2</span>
                    <span className="md:text-[14px] text-[12px]">SIZE</span>
                </Link>
                <Link to='/wipes' className="flex gamd:p-2 gap-1 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 md:font-bold rounded-full">3</span>
                    <span className="md:text-[14px] text-[12px]">WIPES</span>
                </Link>
                <Link to='/checkout' className="flex md:gap-2 gap-1 cursor-pointer hover:font-bold items-center">
                    <span className="px-3 py-1 border-2 text-white-100 hover:border-black hover:bg-black hover:text-white border-white-200 md:font-bold rounded-full">4</span>
                    <span className="md:text-[14px] text-[12px]">CHECKOUT</span>
                </Link>
                <Button className="md:flex hidden" value="Continue Shopping" type="outlined" icon={<BsArrowRight fontSize="1.5rem" />} oncClick={()=> setIsOpen(true)} />
            </div>
        </div>
    )
}