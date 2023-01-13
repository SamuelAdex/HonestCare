import React from 'react'
import { Button } from './Button'
import { BsArrowRight } from 'react-icons/bs'


export const Section = ({ image, content, btnText, onClick, type, backGround }) => {
    return (
        type === 'imgLeft' ?
            <div className={`${backGround} block py-20`}>
                <div className="w-[70vw] mx-auto h-full">
                    <div className="grid md:grid-cols-2 items-center gap-10 md:gap-0">
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div className='md:pl-36'>
                            {content}
                            <div className='flex mt-10'>
                                {
                                    btnText &&
                                    <Button value={btnText} oncClick={onClick} icon={<BsArrowRight />} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className={`${backGround} block py-20`}>
                <div className="w-[70vw] mx-auto h-full">
                    <div className="md:grid md:grid-cols-2 flex-col-reverse flex items-center gap-10 md:gap-0">

                        <div className='md:pr-36'>
                            {content}
                            <div className='flex mt-10'>
                                {
                                    btnText &&
                                    <Button value={btnText} oncClick={onClick} icon={<BsArrowRight />} />
                                }
                            </div>
                        </div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
}
