import React from 'react'


export default function Input({labelValue, inputType, hint, msgB, msgT, className}) {
    return (
        <div className={`${className} flex flex-col gap-2 w-full mb-5`}>
            <label>{labelValue}</label>
            <small className="text-red text-[10px]">{msgT}</small>
            <input type={inputType} className={`${className} w-full p-2 rounded-md border-[0.1px] md:border-2 border-red`} placeholder={hint} />
            <small className="text-red text-[10px]">{msgB}</small>
        </div>
    )
}