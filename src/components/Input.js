import React from 'react'


export default function Input({labelValue, inputType, hint}) {
    return (
        <div className="flex flex-col gap-2 w-full mb-5">
            <label>{labelValue}</label>
            <input type={inputType} className="w-full p-2 rounded-md border-2 border-red" placeholder={hint} />
        </div>
    )
}