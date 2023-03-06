import React from 'react'

const Modal = ({children}) => {
  return (
    <div className="w-full bg-transparent h-full fixed z-60 md:p-8 grid place-items-center h-[100vh]">
        {children}
    </div>
  )
}

export default Modal