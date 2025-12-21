import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test/child-test')({
    component: RouteComponent,
    validateSearch: search => ({ page: Number(search.page ?? 1) }),
    loader: async () => {
        return await new Promise<{ page: number; name: string }>(resolve =>
            setTimeout(
                () =>
                    resolve({
                        page: 1,
                        name: 'Test',
                    }),
                1000,
            ),
        );
    },
});

function RouteComponent() {
    const data = Route.useLoaderData();
    return (
        <div>
            Hello "/test/child-test"!
            {data?.name} - {data?.page}
        </div>
    );
}
