import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/_auth_layout')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <h1>Layout</h1>
            <div>Header</div>
            <Outlet />
            <div>Footer</div>
        </div>
    );
}
