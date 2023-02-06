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

import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='md:flex md:min-h-screen'>

        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>CRM - Clients</h2>

            <nav className='mt-10'>
                <Link className='text-2xl block mt-2 hover:text-blue-300 text-white font-semibold' to="/">Clients</Link>
                <Link className='text-2xl block mt-2 hover:text-blue-300 text-white font-semibold' to="/clients/new">New client</Link>
            </nav>
        </aside>

        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </main>

    </div>
  )
}

export default Layout