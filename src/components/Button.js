import React from 'react'
import { NavLink } from 'react-router-dom'

export const Button = ({ value, oncClick, icon, path, type, className }) => {
    return (
        type === 'outlined' ?
            // Outlined button
            <NavLink
                to={path}
                className={`${className} border border-red text-red py-2 px-10 rounded-lg font-bold flex items-center gap-2`}
                onClick={() => oncClick()}
            >
                {value}
                <span>{icon}</span>
            </NavLink>
            :
            // Solid button
            <NavLink
                to={path}
                className={`${className} border border-red text-white bg-red py-2 px-10 rounded-lg font-bold flex items-center gap-2`}
                onClick={() => oncClick()}
            >
                {value}
                <span>{icon}</span>
            </NavLink>

    )
}
