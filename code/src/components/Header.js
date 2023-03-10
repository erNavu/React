import React from 'react'
import companyLogo from '../assets/foodLogo.png';
import { NAV_ITEMS } from '../config';

export default function Header() {

    return (
        <div className='header'>
            <div className='logo'>
                <img className='company_logo' alt="logo" src={companyLogo} />
                <div className='company_name'>Bite Buddy</div>
            </div>
            {NAV_ITEMS?.length ?
                <ul className='navItems'>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}> {item.name}</li>
                    ))}
                </ul> : null}
        </div>
    )
}
