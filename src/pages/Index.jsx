/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Index.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import { useLoaderData } from 'react-router-dom';
import Client from "../components/Client";
import clients from "../constants/clients";

export function loader()
{
  return clients;
}

function Index()
{

  const data = useLoaderData();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'> Clients </h1>
      <p className='mt-3'>Manage your clients</p>

      {data.length
        ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Client</th>
                <th className="p-2">Contact</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {clients.map(client => (
                <Client client={client} key={client.id} />
              ))}
            </tbody>

          </table>

        )
        : (
          <p className="text-center mt-10">No clients</p>
        )}
    </>
  )
}

export default Index