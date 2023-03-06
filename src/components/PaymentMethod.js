import React, {useState} from 'react'

const PaymentMethod = ({pImg, ptitle, pdate, key}) => {
    const [currentPayment, setCurrentPayment] = useState(null)
    const [isActive, setIsActive] = useState(false)
    
  return (
    <div onClick={()=>{ 
        setCurrentPayment(key)
        setIsActive(!isActive)
        }} 
        className={`${isActive ? 'border-red bg-pink' : 'border-gray-600'} flex gap-2 border-2 rounded-md p-4 mb-4 cursor-pointer`}
    >
        <div className="">
            <img src={pImg} alt="" />
        </div>
        <div className="flex flex-1 justify-between">
            <div className="">
                <div className="text-[14px] font-bold">{ptitle}</div>
                <div className="text-[14px] font-normal">{pdate}</div>
                <div className="flex gap-2">
                    <span className="text-[#000] font-bold">Set as default</span>
                    <span className="text-red cursor-pointer">Edit</span>
                </div>
            </div>
            <div className="">
                <input type="checkbox" onChange={()=>{ 
                    // setCurrentPayment(key)
                    setIsActive(!isActive)
                    }} 
                    checked={isActive ? true : false} 
                    className="rounded-full p-2" 
                />
            </div>
        </div>
    </div>
  )
}

export default PaymentMethod