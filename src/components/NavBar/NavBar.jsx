/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {IoMdSearch} from 'react-icons/io'
import {FaCaretDown, FaShoppingCart} from 'react-icons/fa'
import { DarkMode } from './DarkMode'

const menuLinks = [
    {
        id:1,
        name:"Inicio",
        link:"/#",
    },
    {
        id:2,
        name:"Tienda",
        link:"/#Shop",
    },
    {
        id:3,
        name:"Acerca",
        link:"/#About",
    },
    {
        id:4,
        name:"Blogs",
        link:"/#blog",
    },
]

const DropDownLinks = [
    {
        id:1,
        name:"Productos Tendencia",
        link:"/#",
    },
    {
        id:2,
        name:"Los más vendidos",
        link:"/#",
    },
    {
        id:3,
        name:"Productos Top",
        link:"/#",
    },
]

export const NavBar = ({handleOrderPopup}) => {

    

    return(
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* Logo and Links Section */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl">Eshop</a>
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {
                                    menuLinks.map(({id, name, link}) => (
                                        <li key={id}>
                                            <a href={link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">{name}</a>
                                        </li>
                                    ))
                                }
                                {/* Drop Down Menu */}
                                <li className='realtive cursor-pointer group'>
                                    <a href="#" className='flex items-center gap-[3px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                        </span>
                                    </a>
                                    {/* Drop Links */}
                                    <div className=' absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                DropDownLinks.map(({id, name, link }) => (
                                                    <li key={id}>
                                                        <a href={link} className='text-gray-500 dark:hover:text-white w-full p-2 inline-block hover:bg-primary/20 duration-200 rounded-md font-semibold'>{name}</a>
                                                    </li>
                                                ))    
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* NavBar Right Section */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative  group hidden sm:block'>
                            {/* searchBar */}
                            <input type="text" placeholder="Search" className="search-bar"/>
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200' /> 
                        </div>
                        {/*Order Button Section  */}
                        <button className='relative p-3' onClick={handleOrderPopup}>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'/>
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex
                            items-center justify-center text-xs'>
                            4</div>
                        </button>
                        {/* Dark Mode Section */}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}