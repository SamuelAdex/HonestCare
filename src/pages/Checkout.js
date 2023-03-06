import React, {useState} from 'react'
import { MdClose, MdShare } from 'react-icons/md'
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'

import Navbar from '../components/Navbar'
import {CheckoutStep} from '../components/CheckoutStep'
import Input from '../components/Input'
import pam1 from '../assets/img/image 70(1).png'
import pam2 from '../assets/img/image 82.png'
import visa from '../assets/img/visa.png'
import master from '../assets/img/master.png'
import apple from '../assets/img/apple.png'
import stripe from '../assets/img/stripe.png'
import paypal from '../assets/img/paypal.png'
import {Button} from '../components/Button'
import Modal from '../components/Modal'
import PaymentMethod from '../components/PaymentMethod'

const Checkout = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const paymentMethods = [
        {
            id: 1,
            pImg: visa,
            ptitle: "Visa ending in 1234",
            pdate: "Expiry 06/2024",
        },
        {
            id: 2,
            pImg: master,
            ptitle: "Master ending in 1234",
            pdate: "Expiry 06/2024",
        },
        {
            id: 3,
            pImg: apple,
            ptitle: "Apple ending in 1234",
            pdate: "Expiry 06/2024",
        },
        {
            id: 4,
            pImg: stripe,
            ptitle: "Stripe ending in 1234",
            pdate: "Expiry 06/2024",
        },
        {
            id: 5,
            pImg: paypal,
            ptitle: "Paypal ending in 1234",
            pdate: "Expiry 06/2024",
        },
    ]
    
    return (
        <div className="bg-pink relative">
            <Navbar />
            {isOpen && <Modal>
                <div className="bg-white md:w-[60%] w-full rounded-md shadow-md p-5">
                    <MdClose className="text-right" onClick={()=> setIsOpen(false)} />
                    {paymentMethods.map((payment)=>(
                        <PaymentMethod pImg={payment.pImg} ptitle={payment.ptitle} pdate={payment.pdate} key={payment.id} />
                    ))}
                </div>
            </Modal>}
            <div className="pt-32 flex justify-center pb-20">
                <div className="bg-white md:w-[65%] md:flex content-center gap-6 p-14 shadow-lg">
                    <div className="">
                        <div className="flex gap-8 border-b-2 border-gray-600 pb-3">
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
                        <Input labelValue="Delivery address" inputType="text" />
                        <div className="md:flex gap-5 items-center mb-2">                            
                            <Input labelValue="City" className="" msgB={"(Delivery is only within Lagos)"} inputType="text" />
                            <div className="w-full p-5"></div>
                        </div>                        

                        {/* Gifter's Information */}
                        <div className="">
                            <div className="mt-4">
                                <h1 className="font-bold text-[16px]">Gifter's information</h1>
                            </div>
                            <div className="mt-4">
                                <Input labelValue="Email address" inputType="email" />
                            </div>
                            <div className="md:flex gap-5 items-center mb-2">                            
                                <Input labelValue="First name" inputType="text" />
                                <Input labelValue="Last name" inputType="text" />
                            </div>
                            <Input labelValue="Phone number" inputType="number" />
                            <div className="">
                                <label htmlFor="">Note</label>
                                <textarea className="w-full h-[50%] p-2 rounded-md border-[0.1px] md:border-2 border-red mt-3"></textarea>
                            </div>
                        </div>
                        <div className="md:flex gap-3 items-center mt-5">
                            <p className="font-normal text-[14px] mb-2">Share payment link to Someone?</p>
                            <Button value={"Share"} icon={<MdShare fontSize={"1.6rem"} />} className="font-normal text-[14px] flex flex-wrap justify-center" />
                        </div>
                    </div>
                    <div className="flex justify-center md:mt-0 mt-16">
                        <div className="">
                        <div className="border-2 border-black rounded-lg md:w-[90%] w-[100%]">
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
                                <div className="flex justify-center items-center gap-3 mt-4 flex-col border-b-2 border-gray-600 py-3">
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
                                        <span className="font-bold">Total</span>
                                        <span>N12,000</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-3 mt-4 flex-col">
                                    <h3 className="font-bold text-[16px] w-[80%]">Subscription Duration</h3>
                                    <div className="flex justify-between w-[80%]">
                                        <span>One Time</span>
                                        <span className="p-3 rounded-full border-2 border-black cursor-pointer hover:bg-black"></span>
                                    </div>
                                    <div className="flex justify-between w-[80%]">
                                        <span>Weekly</span>
                                        <span className="p-3 rounded-full border-2 border-black cursor-pointer hover:bg-black"></span>
                                    </div>
                                    <div className="flex justify-between w-[80%]">
                                        <span>Bi-Weekly</span>
                                        <span className="p-3 rounded-full border-2 border-black cursor-pointer hover:bg-black"></span>
                                    </div>
                                    <div className="flex justify-between w-[80%]">
                                        <span>Monthly</span>
                                        <span className="p-3 rounded-full border-2 border-black cursor-pointer hover:bg-black"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button value="make Payment" icon={<BiRightArrowAlt fontSize={"1.6rem"} />} className="mt-6 md:w-[80%] flex md:hidden justify-center" />
                        </div>
                    </div>
                </div>
            </div>  
            <CheckoutStep setIsOpen={setIsOpen} />
        </div>
    )
}


export default Checkout