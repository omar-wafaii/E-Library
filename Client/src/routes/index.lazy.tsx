import { createLazyFileRoute } from '@tanstack/react-router'
import Books from '../Components/Books'

export const Route = createLazyFileRoute('/')({
  component: () => <Books />
})