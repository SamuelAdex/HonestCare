import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import img1 from '../../../assets/img/image 82.png'
import img2 from '../../../assets/img/image 70(1).png'


const OrderHistory = () => {
    
  return (
    <div className="">
        <div className="px-5">
            <div className="pl-5">
                <h1 className="text-[36px] font-bold font-roboto">Order Histtory</h1>
            </div>
            <div className="mt-4 bg-white p-14 rounded-lg flex flex-col gap-16 justify-center">
                <div className="flex flex-col items-center w-full">
                    <div className="md:flex gap-10 w-[90%]">
                        <div className="flex gap-3">
                            <AiOutlineShoppingCart fontSize={"3rem"} className="bg-red p-3 rounded-full text-[#fff]" />
                            <div className="">
                                <div className="text-[14px]">Jan 25, 2023</div>
                                <div className="text-[14px]">11:33 Am</div>
                            </div>
                        </div>
                        <div className="flex-1 border-2 border-[#000] p-5 px-10 rounded-md">
                            <div className="p-3 md:flex justify-between border-b-2 border-[#bdbdbd]">
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className="font-bold text-[18px]">Huggie Diaper</h3>
                                        <p className="font-bold text-[13px] text-[#bdbdbd]">Size: 2(3-6kg)</p>
                                        <p className="text-[13px]">4 Packs</p>
                                        <p className="font-bold text-[15px]">N2,000</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={img1} alt="" className="w-[100px]" />
                                    </div>
                                    <div className="">
                                        <h3 className="font-bold text-[18px]">Huggie Wipes</h3>
                                        <p className="font-bold text-[13px] text-[#bdbdbd]">Size: 2(3-6kg)</p>
                                        <p className="text-[13px]">4 Packs</p>
                                        <p className="font-bold text-[15px]">N2,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-[#bdbdbd] p-3">
                                <div className="flex justify-between w-full">
                                    <span>SubTotal</span>
                                    <span>N12,000</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span>VAT</span>
                                    <span>N12,000</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span>Shipping</span>
                                    <span>N12,000</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold">N12,000</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full p-3">
                                <span className="font-bold text-[16px]">Subscription Duration</span>
                                <span className="text-[16px]">Monthly</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="md:flex gap-10 w-[90%]">
                        <div className="flex gap-3">
                            <AiOutlineShoppingCart fontSize={"3rem"} className="bg-red p-3 rounded-full text-[#fff]" />
                            <div className="">
                                <div className="text-[14px]">Jan 25, 2023</div>
                                <div className="text-[14px]">11:33 Am</div>
                            </div>
                        </div>
                        <div className="flex-1 border-2 border-[#000] p-5 px-10 rounded-md">
                            <div className="p-3 md:flex justify-between border-b-2 border-[#bdbdbd]">
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="">
                                        <h3 className="font-bold text-[18px]">Huggie Diaper</h3>
                                        <p className="font-bold text-[13px] text-[#bdbdbd]">Size: 2(3-6kg)</p>
                                        <p className="text-[13px]">4 Packs</p>
                                        <p className="font-bold text-[15px]">N2,000</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={img1} alt="" className="w-[100px]" />
                                    </div>
                                    <div className="">
                                        <h3 className="font-bold text-[18px]">Huggie Wipes</h3>
                                        <p className="font-bold text-[13px] text-[#bdbdbd]">Size: 2(3-6kg)</p>
                                        <p className="text-[13px]">4 Packs</p>
                                        <p className="font-bold text-[15px]">N2,000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-2 border-[#bdbdbd] p-3">
                                <div className="flex justify-between w-full">
                                    <span>SubTotal</span>
                                    <span>N12,000</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span>VAT</span>
                                    <span>N12,000</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span>Shipping</span>
                                    <span>N12,000</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold">N12,000</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full p-3">
                                <span className="font-bold text-[16px]">Subscription Duration</span>
                                <span className="text-[16px]">Monthly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderHistory