import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/about')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
