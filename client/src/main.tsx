import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';

import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Root } from './pages/Root.tsx';
import { Hotel } from './pages/Hotel.tsx';
import { Locations } from './pages/Locations.tsx';
import { Restaurants } from './pages/Restaurants.tsx';
import { Rooms } from './pages/Rooms.tsx';
import { SpecialOffers } from './pages/SpecialOffers.tsx';
import { Reservations } from './pages/Reservations.tsx';
import FAQs from './pages/QandA.tsx';
import { Homepage } from './pages/Homepage.tsx';
import FamilyBunk from './pages/FamilyBunk.tsx';
import LoversHideaway from './pages/LoversHideaway.tsx';
import ScenicBalconySuite from './pages/ScenicBalconySuite';
import VerandaVistaSuite from './pages/VerandaVistaSuite';
import LuxeSuite from './pages/LuxeSuite';
import SerenityVilla from './pages/SerenityVilla';
import TreetopHaven from './pages/TreetopHaven.tsx';
import LeisureDayAccess from './pages/LeisureDayAccess.tsx';

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
            // Room detail routes
            {
                path: '/family-bunk',
                element: <FamilyBunk />
            },
            {
                path: '/lovers-hideaway',
                element: <LoversHideaway />
            },
            {
                path: '/scenic-balcony-suite',
                element: <ScenicBalconySuite />
            },
            {
                path: '/veranda-vista-suite',
                element: <VerandaVistaSuite />
            },
            {
                path: '/luxe-suite',
                element: <LuxeSuite />
            },
            {
                path: '/serenity-villa',
                element: <SerenityVilla />
            },
            {
                path: '/treetop-haven',
                element: <TreetopHaven />
            },
            {
                path: '/leisure-day-access',
                element: <LeisureDayAccess />
            },
        ]
    },
]);

const queryClient = new QueryClient({
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
