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
                    <div className="md:grid grid-cols-2 flex flex-col gap-12 w-[90%] mb-32">
                        <div className="grid place-items-center">
                            <img src={product2} className="hover:border-2 hover:border-red rounded-lg" alt="" />
                            <div className="w-full -mt-5 flex justify-center cursor-pointer">
                                <Button value="Shop from Wipers" path="/size"  icon={<BsArrowRight fontSize="1.5rem" />} />
                            </div>
                        </div>
                        <div className="grid place-items-center">
                            <img src={product2} className="hover:border-2 hover:border-red rounded-lg" alt="" />
                            <div className="w-full -mt-5 flex justify-center cursor-pointer">
                                <Button value="Shop from Wipers" path="/size" className="" icon={<BsArrowRight fontSize="1.5rem" />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutStep />
        </div>
    )
}

export default Brand