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
        <div className='header'>
            <div className='logo'>
                <img className='company_logo' alt="logo" src={companyLogo} />
                <div className='company_name'>Bite Buddy</div>
            </div>

            <div className='header-right-side'>
                <div>online status :  {isOnline ? "✅" : "🔴"} </div>
                {NAV_ITEMS?.length ?
                    <ul className='navItems'>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}> <Link to={`/${item.link}`}>{item.name}</Link></li>
                        ))}
                    </ul> : null}
                <button className='login-btn' onClick={() => {
                    let text = btnText === "logout" ? "login" : "logout"
                    setBtnText(text)
                    navigate("/login")
                }}>{btnText}</button>


            </div>
        </div>
    )
}
