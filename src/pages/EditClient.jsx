/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file EditClient.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Tuesday, 7th February 2023
 */

import { Form, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom"
import { editClient, getClient } from "../api/clients"
import Error from "../components/Error"
import ClientForm from "../components/Form"

export async function loader({ params })
{
    const client = await getClient(params.clientId)

    if (Object.values(client).length === 0)
    {
        throw new Response('', {
            status: 404,
            statusText: `This client doesn't exists`
        })
    }
    return client
}

export async function action({ request, params })
{
    const formData = await request.formData()

    const data = Object.fromEntries(formData)

    const errors = []

    const email = formData.get('email')

    // Validation
    if (Object.values(data).includes(''))
    {
        errors.push('All the fields are mandatory')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email))
    {
        errors.push('The email is not valid')
    }

    // Return data if there some error
    if (Object.keys(errors).length)
    {
        return errors
    }


    // Edit client

    await editClient(params.clientId, data)
    return redirect('/')
}


function EditClient()
{
    const navigate = useNavigate()
    const client = useLoaderData()
    const errors = useActionData()

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'> Edit client </h1>
            <p className='mt-3'>Fill in all the fields to edit an existing customer</p>

            <div className="flex justify-end">
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md"> Back

                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

                {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="post"
                    noValidate>

                    <ClientForm
                        client={client}
                    />


                    <input
                        type="submit"
                        value="Save client changes"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-md"
                    />
                </Form>

            </div>
        </>
    )
}

export default EditClient