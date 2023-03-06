import React from 'react'
import {MdOutlinePerson, MdLogout} from 'react-icons/md'
import {FiShoppingBag} from 'react-icons/fi'
import {HiTrendingUp} from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className="fixed w-[20%] p-5 h-[90vh] z-6 bg-pink">
      <div className="ml-24">
        <div className="mb-4">
          <h5 className="text-[16px] text-[#bdbdbd]">Account Page</h5>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center text-[#000] hover:text-[#DA4141]">
            <MdOutlinePerson />
            <span className="text-[16px] cursor-pointer">Account Info</span>
          </div>
          <div className="flex gap-3 items-center text-[#000] hover:text-[#DA4141]">
            <FiShoppingBag />
            <span className="text-[16px] cursor-pointer">Subscription</span>
          </div>
          <div className="flex gap-3 items-center text-[#000] hover:text-[#DA4141]">
            <HiTrendingUp className="" />
            <span className="text-[16px] cursor-pointer">Order History</span>
          </div>
          <div className="flex gap-3 mt-10 items-center text-[#000] hover:text-[#DA4141]">
            <MdLogout className="" />
            <span className="text-[16px] cursor-pointer">Logout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar