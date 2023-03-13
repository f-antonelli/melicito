import { lazy, LazyExoticComponent } from 'react';
import { HomePage } from '../pages';

interface Route {
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    name: string;
}

export const routes: Route[] = [
    {
        Component: HomePage,
        name: 'Home',
        path: '/',
    },
    {
        Component: lazy(() => import('../pages/SitesPage')),
        name: 'Sites',
        path: '/sites',
    },
];