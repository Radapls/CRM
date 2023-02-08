/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Client.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

import { Form, redirect, useNavigate } from "react-router-dom";
import { deleteClient } from "../api/clients";

export async function action({ params })
{
    await deleteClient(params.clientId)
    return redirect('/')
}

function Client({ client })
{
    const navigate = useNavigate()

    const { name, company, email, mobile, id, notes } = client;

    return (
        <tr className="border-b items-center">
            <td className="p-6">
                <p className="text-l text-gray-800">{name}</p>
                <p >{company}</p>
            </td>


            <td className="p-6 text-center">
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Email: </span> {email}
                </p>
                <p className="text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Cellphone: </span> {mobile}
                </p>
            </td>

            <td className="p-6 text-center">
                <div className="p-3 w-full border rounded-md border-blue-800 border-solid italic bg-slate-50 cursor-pointer">
                    <p className="text-gray-600 font-semibold"> {notes}</p>
                </div>
            </td>

            <td className="p-6 flex gap-3 justify-center">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`)}> Edit
                </button>

                <Form
                    method="POST"
                    action={`/clients/${id}/delete`}
                    onSubmit={(e) =>
                    {
                        if (!confirm('Do you want to delete this client?'))
                        {
                            e.preventDefault()

                        }

                    }}>
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"> Delete
                    </button>
                </Form>
            </td>

        </tr>
    )
}

export default Client