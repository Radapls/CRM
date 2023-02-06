/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file routes.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    { path: '/', element: <h1>Home</h1> },
    { path: '/us', element: <h1>Us</h1> }
])

export default router