import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth_layout/prefixed-route/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/login"!</div>
}
