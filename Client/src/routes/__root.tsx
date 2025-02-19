
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from '../Components/Header'

export const Route = createRootRoute({
    component: () => (
      <>
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  })