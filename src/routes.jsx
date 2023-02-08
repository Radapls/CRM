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
import { action as DeleteClientAction } from './components/Client';
import ErrorPage from "./components/ErrorPage";
import Layout from './components/Layout';
import EditClient, { action as EdictClientAction, loader as loaderEditClient } from "./pages/EditClient";
import Index, { loader as loaderClients } from './pages/Index';
import NewClient, { action as NewClientAction } from './pages/NewClient';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: loaderClients,
                errorElement: <ErrorPage />
            },
            {
                path: '/clients/new',
                element: <NewClient />,
                action: NewClientAction,
                errorElement: <ErrorPage />
            },
            {
                path: 'clients/:clientId/edit',
                element: <EditClient />,
                loader: loaderEditClient,
                action: EdictClientAction,
                errorElement: <ErrorPage />
            },
            {
                path: 'clients/:clientId/delete',
                action: DeleteClientAction
            }
        ]
    }

])

export default router