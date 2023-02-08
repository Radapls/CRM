/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file ErrorPage.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Tuesday, 7th February 2023
 */

import { useRouteError } from "react-router-dom"

export default function ErrorPage()
{
    const error = useRouteError()
    console.log(error)

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM  - Clients</h1>
            <p className="text-center">An error has ocurred</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}