/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Layout.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import { Link, Outlet, useLocation } from 'react-router-dom'
import BrandImage from '../img/logo-white.png'

function Layout()
{

    const location = useLocation()

    return (
        <div className='md:flex md:min-h-screen'>

            <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <div className="flex space-x-4 items-center">
                    <img className="w-12" src={BrandImage} alt="Brand" />
                    <h2 className='text-4xl font-black text-center text-white'>CRM Radapls</h2>
                </div>

                <nav className='mt-10'>
                    <Link
                        className={`${location.pathname === '/'
                            ? 'text-blue-300'
                            : 'text-white'}
                        text-2xl block mt-2 hover:text-blue-300 text-white font-semibold`}
                        to="/">
                        Clients
                    </Link>

                    <Link
                        className={`${location.pathname === '/clients/new'
                            ? 'text-blue-300'
                            : 'text-white'}
                        text-2xl block mt-2 hover:text-blue-300 text-white font-semibold`}
                        to="/clients/new">
                        New client
                    </Link>

                </nav>
            </aside>

            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>

        </div>
    )
}

export default Layout