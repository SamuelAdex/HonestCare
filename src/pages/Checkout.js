import React from 'react'
import { MdClose } from 'react-icons/md'
import {BiLeftArrowAlt} from 'react-icons/bi'

import Navbar from '../components/Navbar'
import {CheckoutStep} from '../components/CheckoutStep'
import Input from '../components/Input'
import pam1 from '../assets/img/image 70(1).png'
import pam2 from '../assets/img/image 82.png'

const Checkout = ()=>{
    return (
        <div className="bg-pink relative">
            <Navbar />
            <div className="pt-32 flex justify-center pb-20">
                <div className="bg-white w-[65%] grid grid-cols-2 gap-6 p-14 items-center shadow-lg">
                    <div className="">
                        <div className="flex gap-2 border-b-2 border-gray-600 pb-3">
                            <BiLeftArrowAlt fontSize={"1.8rem"} />
                            <h1 className="text-[20px] font-bold">Checkout</h1>
                        </div>
                        <div className="mt-4">
                            <h1 className="font-bold text-[16px]">Contact information</h1>
                        </div>
                        <div className="mt-4">
                            <Input labelValue="Email address" inputType="email" />
                        </div>
                        <div className="">
                            <h1 className="font-bold text-[18px]">Shipping address</h1>
                        </div>
                        <div className="md:flex gap-5 items-center mb-2">                            
                            <Input labelValue="First name" inputType="text" />
                            <Input labelValue="Last name" inputType="text" />
                        </div>
                        <Input labelValue="Phone number" inputType="number" />
                        <Input labelValue="House address" inputType="text" />
                        <div className="md:flex gap-5 items-center mb-2">                            
                            <Input labelValue="City" inputType="text" />
                            <Input labelValue="State" inputType="text" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-2 border-black rounded-lg w-[70%]">
                            <div className="p-2 border-b-2 border-gray-600">
                                <h1 className="font-bold text-[18px]">Order details</h1>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-around items-center py-3 border-b-2 border-gray-600">
                                    <img src={pam1} alt="" />
                                    <div className="flex gap-4 items-center">
                                        <div className="">
                                            <h1 className="font-bold text-[18px]">Huggie Diaper</h1>
                                            <h2 className="text-[14px] text-gray-600">Size 2 (3-6kg)</h2>
                                            <h2 className="font-medium text-[14px]">4 Packs</h2>
                                            <h3 className="font-bold text-[14px]">N2,000</h3>
                                        </div>
                                        <div className="cursor-pointer">
                                            <MdClose />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-around items-center py-3 border-b-2 border-gray-600">
                                    <img className="w-[40%]" src={pam2} alt="" />
                                    <div className="flex gap-4 items-center">
                                        <div className="">
                                            <h1 className="font-bold text-[18px]">Huggie Wipes</h1>
                                            <h2 className="text-[14px] text-gray-600">Size 2 (3-6kg)</h2>
                                            <h2 className="font-medium text-[14px]">4 Packs</h2>
                                            <h3 className="font-bold text-[14px]">N10,000</h3>
                                        </div>
                                        <div className="cursor-pointer">
                                            <MdClose />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-3 mt-4 flex-col">
                                    <div className="flex justify-between w-[80%]">
                                        <span>SubTotal</span>
                                        <span>N12,000</span>
                                    </div>
                                    <div className="flex justify-between w-[80%]">
                                        <span>VAT</span>
                                        <span>N12,000</span>
                                    </div>
                                    <div className="flex justify-between w-[80%]">
                                        <span>Shipping</span>
                                        <span>N12,000</span>
                                    </div>
                                    <div className="flex justify-between w-[80%]">
                                        <span>Total</span>
                                        <span>N12,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <CheckoutStep />
        </div>
    )
}


export default Checkout