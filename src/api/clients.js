/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file clients.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Monday, 6th February 2023
 */

export async function getClients()
{
    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    return result
}

export async function getClient(id)
{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()
    return result
}

export async function createClient(data)
{
    try
    {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        await response.json()
    } catch (error)
    {
        console.log(error)
    }
}

export async function editClient(id, data)
{
    try
    {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        await response.json()
    } catch (error)
    {
        console.log(error)
    }
}

export async function deleteClient(id)
{
    try
    {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE"
        })
        await response.json()
    } catch (error)
    {
        console.log(error)
    }
}