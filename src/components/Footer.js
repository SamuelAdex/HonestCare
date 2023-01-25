import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    AiOutlineTwitter,     
    AiOutlineInstagram,
    AiOutlineGithub
} from "react-icons/ai";
import {
    GrFacebookOption
} from 'react-icons/gr';
import Logo from "../assets/img/logo.png";


export default function Footer() {
    const SOCIAL_LINKS = [
        {
            id: 1,
            icon: <AiOutlineTwitter />
        },
        {
            id: 2,
            icon: <GrFacebookOption />
        },
        {
            id: 3,
            icon: <AiOutlineInstagram />
        },
        {
            id: 4,
            icon: <AiOutlineGithub />
        }
    ];
    const FOOTER_LINKS = [
        {
            id: 1,
            title: 'Products',
            link: '/'
        },
        {
            id: 2,
            title: 'Brands',
            link: '/'
        },
        {
            id: 3,
            title: 'Pricing',
            link: '/'
        },
        {
            id: 4,
            title: 'My Account',
            link: '/'
        },
    ]

    return (
        <div className='w-full border-t pt-10'>
            <div className="w-[80vw] mx-auto h-full md:flex md:flex-row flex-col gap-3 md:gap-0 text-center justify-center flex items-center pb-10">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul className='md:flex items-center w-full md:justify-between'>
                    <li className='w-full flex justify-evenly'>
                        {
                            FOOTER_LINKS.map((LINKS, i) => {
                                return (
                                    <NavLink to={LINKS.link} key={i}>
                                        {LINKS.title}
                                    </NavLink>
                                )
                            })
                        }
                    </li>
                    <li className="flex justify-evenly w-full mt-4">
                        {
                            SOCIAL_LINKS.map((link)=>(
                                <NavLink className="rounded-full shadow-md p-2 bg-red text-white" to="" key={link.id} >
                                    {link.icon}
                                </NavLink>
                            ))
                        }
                    </li>
                </ul>
            </div>
            <div className="w-[70vw] mx-auto border-t p-5 text-center">
                <p>© Copyright 2022, All Rights Reserved by Honestcare</p>
            </div>

        </div>
    )
}
