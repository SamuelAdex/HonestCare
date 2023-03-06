import React, {useState} from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

import Input from '../../../components/Input'
import {Button} from '../../../components/Button'
import pic from '../../../assets/img/mother.png'

const AccountInfo = () => {
    const [picture, setPicture] = useState("")

    const handleFileUpload = (e)=>{
        if (e.target.files && e.target.files[0]) {
            if (/image\/*/.test(e.target.files[0].type)) {
                const reader = new FileReader();

                reader.onload = function () {
                    setPicture(reader.result)
                    console.log(reader.result)
                }

                reader.readAsDataURL(e.target.files[0])               
                
            }else{
                return;
            }
        }
    }
  return (
    <div className="">
        <div className="px-5">
            <div className="pl-5">
                <h1 className="text-[36px] font-bold font-roboto">Profile Settings</h1>
            </div>
            <div className="mt-4 bg-white p-14 rounded-lg md:flex gap-16 items-center">
                <div className="flex-1">
                    <div className="mt-3">
                        <h5 className="text-[#667085] font-normal text-[14px]">Profile Details</h5>
                    </div>
                    <div className="">
                        <Input hint="First name" inputType="text" className="border-[#bdbdbd] mb-[0px]" />
                        <Input hint="Last name" inputType="text" className="border-[#bdbdbd] mb-[0px]" />
                        <Input hint="Email Address" inputType="email" className="border-[#bdbdbd] mb-[0px]" />
                        <Input hint="Phone number" inputType="number" className="border-[#bdbdbd] mb-[0px]" />
                        <Input hint="House address" inputType="text" className="border-[#bdbdbd] mb-[0px]" />
                        <div className="md:flex gap-3">
                            <Input hint="City" inputType="text" className="border-[#bdbdbd] mb-[0px]" />
                            <Input hint="State" inputType="text" className="border-[#bdbdbd] mb-[0px]" />
                        </div>
                        <Button value="Save" className="mt-3 flex justify-center" />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="">
                        <h5 className="text-[14px] text-[#667085] font-normal">Your Photo</h5>
                        <p className="text-[14px] text-[#667085] font-normal">This will be displayed on your profile.</p>
                    </div>
                    <div className="flex justify-center mt-3">
                        {!picture && <img src={pic} alt="" className="w-[115px] h-[110px] object-cover rounded-full" />}
                        {picture && <img src={picture} alt="" className="w-[115px] h-[110px] object-cover rounded-full" />}
                    </div>
                    <div className="mt-5 flex flex-col items-center">
                        <label htmlFor="upload" className="flex flex-col w-[90%] cursor-pointer items-center border-2 border-[#667085] p-5 rounded-md">
                            <input onChange={(e)=> handleFileUpload(e)} type="file" className="hidden" id="upload" />
                            <AiOutlineCloudUpload fontSize={"3rem"} className="p-3 rounded-full bg-[#e8e8e8]" />
                            <p className="text-[14px] text-[#667085] mt-2"><strong className="text-red">Click to upload</strong> or drag and drop</p>
                            <p className="mt-2 text-[14px] text-[#667085]">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </label>
                    </div>
                    <div className="mt-5">
                        <div className="">
                            <h3 className="font-bold text-[16px]">Update your password</h3>                            
                        </div>
                        <div className="">
                            <Input hint="Enter new password" inputType="password" className="border-[#bdbdbd] mb-[0px]" />
                            <Input hint="Confirm new password" inputType="password" className="border-[#bdbdbd] mb-[0px]" />
                            <Button value="Save" className="mt-3 flex justify-center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountInfo