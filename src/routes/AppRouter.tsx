import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<span>Loading ...</span>}>
                <Routes>                    
                    {routes.map(({ path, Component }) => (
                        <Route key={path} element={<Component />} path={path} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter