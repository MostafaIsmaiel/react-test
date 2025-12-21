import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/first-route/')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/first-route/"!</div>;
}
