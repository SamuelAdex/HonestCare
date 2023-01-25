import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import GOOGLE from '../assets/img/Google svg.svg'
import {Button} from '../components/Button'
import { BsArrowRight } from 'react-icons/bs'
import Input from '../components/Input'


export default function Login() {
    return (
        <div className="bg-pink relative">    
            <Navbar />        
            <div className="pt-20 h-[130vh] md:h-[105vh] flex justify-center px-5">
                <div className="mt-10 flex flex-col items-center w-[100%] sm:w-2/5">
                    <div className="mb-5">
                        <h1 className="text-xl font-bold">Create an account</h1>
                    </div>
                    <div className="w-[90%] flex justify-center">
                        <button className="bg-white rounded-lg md:w-96 w-full h-50 p-5 gap-3 flex justify-center">
                            <img src={GOOGLE} alt="" />
                            <span className="text-sm font-bold text-black">Login with Google</span>
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-3 md:w-96 w-[90%]">
                        <span className="w-1/2 bg-gray-600 h-[1.2px]"></span>
                        <span className="text-gray-600">or</span>
                        <span className="w-1/2 bg-gray-600 h-[1.2px]"></span>
                    </div>
                    <div className="mt-5 md:w-96 w-[90%] relative">                        
                        <Input labelValue="Email address" inputType="email" hint="Enter Email address" />
                        <Input labelValue="Password" inputType="password" hint="Enter password" />                        
                        <Button value="Login" className="flex justify-center md:w-auto" icon={<BsArrowRight />}  />
                    </div>
                    <div className="text-center mt-3 text-sm md:w-96 w-[90%]">
                        <p>You acknowledge that you read, and agree to our Terms of Service and our <strong>Privacy Policy</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}