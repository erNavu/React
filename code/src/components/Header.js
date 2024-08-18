import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import companyLogo from '../assets/foodLogo.png';
import { NAV_ITEMS } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus"
import { UserContext } from '../utils/UserContext';

export default function Header() {
    const navigate = useNavigate();
    const isOnline = useOnlineStatus()
    const { userData, setUserData } = useContext(UserContext);

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
                <img className='w-24 rounded-full' alt="logo" src={companyLogo} />
                <div className='ml-1 font-semibold text-red-400 text-[24px]'>Bite Buddy</div>
            </div>

            <div className='flex items-center'>
                <div className='mr-2'>online status :  {isOnline ? "✅ " : "🔴"} </div>
                {NAV_ITEMS?.length ?
                    <ul className='flex justify-center'>
                        {NAV_ITEMS.map((item) => (
                            <li className="py-2 mx-4 list-none" key={item.id}> <Link to={`/${item.link}`}>{item.name}</Link></li>
                        ))}
                    </ul> : null}
                <button className='m-2 p-2 min-w-16' onClick={() => {
                    userData.name && setUserData({})
                    navigate("/login")
                }}>{userData.name ? 'logout' : "login"}</button>
                {userData.name && <div className='font-semibold cursor-pointer text-red-400'>{userData.name}   🙍🏻‍♂️ </div>}
            </div>
        </div>
    )
}
