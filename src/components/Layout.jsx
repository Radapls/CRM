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

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <h1 className='text-6xl font-bold'>CRM</h1>
        <Outlet />
    </div>
  )
}

export default Layout