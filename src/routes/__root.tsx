import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => <div>404 - Not Found</div>,
});

function RootComponent() {
    return <Outlet />;
}
