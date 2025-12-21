import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/first-route/first-route-child/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/first-route/first-route-child"!</div>
}
