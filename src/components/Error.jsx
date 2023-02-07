/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Error.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Tuesday, 7th February 2023
 */

function Error({ children })
{
    return (
        <div className="text-center my-4 font-bold p-3 text-white uppercase bg-red-500 rounded-md">
            {children}
        </div>
    )
}

export default Error