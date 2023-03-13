import { lazy, LazyExoticComponent } from 'react';
import { HomePage, SitesPage } from '../pages';

interface Route {
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
    name: string;
}

export const routes: Route[] = [
    {
        Component: SitesPage,
        name: 'Index',
        path: '/',
    },
    {
        Component: lazy(() => import('../pages/HomePage')),
        name: 'Home',
        path: '/home',
    },
];