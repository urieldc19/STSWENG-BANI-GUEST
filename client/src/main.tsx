import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import './index.css'

import {MantineProvider} from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import { Root } from './pages/Root.tsx';
import { Hotel } from './pages/Hotel.tsx';
import { Locations } from './pages/Locations.tsx';
import { Restaurants } from './pages/Restaurants.tsx';
import { RestaurantMenu } from './pages/RestaurantMenu.tsx';
import { Rooms } from './pages/Rooms.tsx';
import { SpecialOffers } from './pages/SpecialOffers.tsx';
import { Reservations } from './pages/Reservations.tsx';
import FAQs from './pages/QandA.tsx';
import { Homepage } from './pages/Homepage.tsx';

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
          {
            path: '/',
            element: <Homepage />
          },
          {
            path: '/hotel',
            element: <Hotel />
          },
          {
            path: '/locations',
            element: <Locations />
          },
          {
            path: '/reservations',
            element: <Reservations />
          },
          {
            path: '/restaurants',
            element: <Restaurants />
          },
          {
            path: '/restaurant_menu',
            element: <RestaurantMenu />
          },
          {
            path: '/rooms',
            element: <Rooms />
          },
          {
            path: '/specialoffers',
            element: <SpecialOffers />
          },
          {
            path: '/faqs', 
            element: <FAQs />          
          },
        ]
    },
]);

const queryClient:QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 15
        }
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider>
                    <RouterProvider router={router} />
            </MantineProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
