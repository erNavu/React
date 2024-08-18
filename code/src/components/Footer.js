import React from 'react'
import { NAV_ITEMS } from '../utils/contants'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-600 dark:border-gray-400">
            <span className="text-sm text-gray-300 sm:text-center dark:text-gray-200">© 2024 <span className="hover:underline">Bite Buddy</span>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-200 sm:mt-0">
                {NAV_ITEMS.map(item => (
                    <li key={item.name} >
                        <Link to={item.link} className="hover:underline me-4 md:me-6">{item.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>

    )
}
