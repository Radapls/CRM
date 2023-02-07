/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file ClientForm.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Tuesday, 7th February 2023
 */

const ClientForm = ({ client }) =>
{
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Name:</label>
                <input
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                    placeholder="Client name"
                    name="name"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >Company:</label>
                <input
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                    placeholder="Client company"
                    name="company"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                    placeholder="Client Email"
                    name="email"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="mobile"
                >Cellphone:</label>
                <input
                    id="mobile"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50 rounded-md"
                    placeholder="Client cellphone"
                    name="mobile"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notes:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 rounded-md h-40 align-self"
                    placeholder="Client notes"
                    name="notes"
                />
            </div>
        </>
    )
}

export default ClientForm