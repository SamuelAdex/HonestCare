import React from 'react'
import MOTHER from "../assets/img/mother.png";
import BABY from "../assets/img/baby.png";
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'


export default function Abt() {
    return (
        <>
            {/* Other section */}
            <div className=" bg-pink block py-20">
                <div className="w-[85vw] mx-auto h-full">
                    <div className="grid md:grid-cols-2 items-center">
                        <div>
                            <img src={MOTHER} alt="" />
                        </div>
                        <div className='flex flex-col items-start md:px-24'>

                            <p>A new mom will experience a roller-coaster of emotions—extreme happiness, frustration, exhaustion, heart-bursting love. At this time what she needs is support navigating the early tasks and emotions of parenthood and recovering from birth.

                            </p>
                            <NavLink to='#' className='border border-red text-white bg-red py-2 px-10 rounded-lg font-bold flex items-center gap-2 mt-10'>Gift a new mother <BsArrowRight fontSize={'1.2em'} /> </NavLink>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 items-center mt-20">
                        <div className='flex flex-col items-start md:px-24'>

                            <p>Customized bundles give you the option of choosing from a selection from the best brands of related products in order to create the bundle you find most appealing.
                                Honest care also offers you discounts based on the number of products selected.
                            </p>
                            <NavLink to='#' className='border border-red text-white bg-red py-2 px-10 rounded-lg font-bold flex items-center gap-2 mt-10'>Customize a Bundle now <BsArrowRight fontSize={'1.2em'} /> </NavLink>

                        </div>
                        <div>
                            <img src={BABY} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
