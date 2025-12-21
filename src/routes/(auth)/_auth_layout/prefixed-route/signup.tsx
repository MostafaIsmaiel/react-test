import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth_layout/prefixed-route/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/signup"!</div>
}
