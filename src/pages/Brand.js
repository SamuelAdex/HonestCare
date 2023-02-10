import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import Navbar from '../components/Navbar'
import SubHeader from '../components/SubHeader'
import {Button} from '../components/Button'
import {CheckoutStep} from '../components/CheckoutStep'
import product1 from '../assets/img/Frame 82.png'
import product2 from '../assets/img/Frame 83.png'



const Brand = ()=>{
    return (
        <div className="bg-pink relative">
            <Navbar />
            <div className="pt-20">
                <SubHeader />
                <div className="flex justify-center">
                    <Button value="Select Brand To Buy From" icon={<BsArrowLeft fontSize="1.3rem" />} className="bg-black flex-row-reverse font-normal border-black" />
                </div>
                <div className="flex justify-center mt-20">
                    <div className="grid grid-cols-2 w-[90%] place-items-center mb-20">
                        <div className="relative ">
                            <img src={product1} className="hover:border-2 hover:border-red rounded-lg" alt="" />
                            <Button value="Shop from Pampers" path="/size" className="absolute z-1 -mt-5 left-40 right-30 cursor-pointer" icon={<BsArrowRight fontSize="1.5rem" />} />
                        </div>
                        <div className="relative ">
                            <img src={product2} className="hover:border-2 hover:border-red rounded-lg" alt="" />
                            <Button value="Shop from Wipers" path="/size" className="absolute z-1 -mt-5 left-40 right-30 cursor-pointer" icon={<BsArrowRight fontSize="1.5rem" />} />
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutStep />
        </div>
    )
}

export default Brand