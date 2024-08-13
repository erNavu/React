import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import companyLogo from '../assets/foodLogo.png';
import { NAV_ITEMS } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus"

export default function Header() {
    const navigate = useNavigate();
    const isOnline = useOnlineStatus()

    const [btnText, setBtnText] = useState('login')

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <img className='w-24 rounded-full' alt="logo" src={companyLogo} />
                <div className='ml-1 font-semibold text-[#cf5b47] text-[24px]'>Bite Buddy</div>
            </div>

            <div className='flex items-center'>
                <div className='mr-2'>online status :  {isOnline ? "✅" : "🔴"} </div>
                {NAV_ITEMS?.length ?
                    <ul className='flex justify-center'>
                        {NAV_ITEMS.map((item) => (
                            <li className="py-2 mx-4 list-none" key={item.id}> <Link to={`/${item.link}`}>{item.name}</Link></li>
                        ))}
                    </ul> : null}
                <button className='m-2 p-2 min-w-16' onClick={() => {
                    let text = btnText === "logout" ? "login" : "logout"
                    setBtnText(text)
                    navigate("/login")
                }}>{btnText}</button>


            </div>
        </div>
    )
}
