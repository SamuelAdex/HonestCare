import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'


import Navbar from '../components/Navbar'
import SubHeader from '../components/SubHeader'
import {Button} from '../components/Button'
import {CheckoutStep} from '../components/CheckoutStep'
import pam1 from '../assets/img/Group 45.png'


const Size = ()=>{
    return (
        <div className="bg-pink relative">
            <Navbar />
            <div className="pt-20">
                <SubHeader />
                <div className="flex justify-center">
                    <Button value="Select Brand To Buy From" icon={<BsArrowLeft fontSize="1.3rem" />} className="bg-black flex-row-reverse font-normal border-black" />
                </div>
                <div className="mt-20 flex justify-center pb-20">
                    <div className="grid md:grid-cols-3 grid-cols-2 w-[80%] gap-3 mb-10">
                        <div className="flex flex-col items-center">
                            <img src={pam1} alt="" />
                            <small className="">Size: 1</small>
                            <h1 className="font-bold text-xl">0-3 kg</h1>
                            <p>32 Diapers Per Pack</p>  
                            <div className="bg-white rounded-xl p-2 flex justify-between items-center w-full font-bold text-xl mt-2 md:w-[50%]">
                                <span className="cursor-pointer">-</span>
                                <span className="">0</span>
                                <span className="cursor-pointer">+</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={pam1} alt="" />
                            <small className="">Size: 1</small>
                            <h1 className="font-bold text-xl">0-3 kg</h1>
                            <p>32 Diapers Per Pack</p>  
                            <div className="bg-white rounded-xl p-2 flex justify-between items-center w-full font-bold text-xl mt-2 md:w-[50%]">
                                <span className="cursor-pointer">-</span>
                                <span className="">0</span>
                                <span className="cursor-pointer">+</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={pam1} alt="" />
                            <small className="">Size: 1</small>
                            <h1 className="font-bold text-xl">0-3 kg</h1>
                            <p>32 Diapers Per Pack</p>  
                            <div className="bg-white rounded-xl p-2 flex justify-between items-center w-full font-bold text-xl mt-2 md:w-[50%]">
                                <span className="cursor-pointer">-</span>
                                <span className="">0</span>
                                <span className="cursor-pointer">+</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={pam1} alt="" />
                            <small className="">Size: 1</small>
                            <h1 className="font-bold text-xl">0-3 kg</h1>
                            <p>32 Diapers Per Pack</p>  
                            <div className="bg-white rounded-xl p-2 flex justify-between items-center w-full font-bold text-xl mt-2 md:w-[50%]">
                                <span className="">-</span>
                                <span className="">0</span>
                                <span className="">+</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={pam1} alt="" />
                            <small className="">Size: 1</small>
                            <h1 className="font-bold text-xl">0-3 kg</h1>
                            <p>32 Diapers Per Pack</p>  
                            <div className="bg-white rounded-xl p-2 flex justify-between items-center w-full font-bold text-xl mt-2 md:w-[50%]">
                                <span className="cursor-pointer">-</span>
                                <span className="">0</span>
                                <span className="cursor-pointer">+</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={pam1} alt="" />
                            <small className="">Size: 1</small>
                            <h1 className="font-bold text-xl">0-3 kg</h1>
                            <p>32 Diapers Per Pack</p>  
                            <div className="bg-white rounded-xl p-2 flex justify-between items-center w-full font-bold text-xl mt-2 md:w-[50%]">
                                <span className="cursor-pointer">-</span>
                                <span className="">0</span>
                                <span className="cursor-pointer">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutStep />
        </div>
    )
}

export default Size