import React from 'react'

export const Header = ({ title, subtitle }) => {
    return (
        <div className=' md:text-7xl md:w-[53%] text-start md:text-center mx-auto mb-10'>
            <h1 className='font-extrabold text-[2em] md:text-5xl mx-auto mb-3'>{title}</h1>
            <p className='text-xl md:text-xl mx-auto'>{subtitle}</p>
        </div>
    )
}
