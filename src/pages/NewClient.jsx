/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file NewClient.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import { useNavigate } from "react-router-dom"

const NewClient = () =>
{

  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'> New client </h1>
      <p className='mt-3'>Fill in all the fields to register a new customer</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md"> Back

        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <p>Forme here</p>
      </div>
    </>
  )
}

export default NewClient