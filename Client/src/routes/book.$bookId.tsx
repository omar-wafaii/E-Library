import { createFileRoute } from '@tanstack/react-router'
import BookPage from '../Components/BookPage'
import { fetchGoogleBook } from '../services/google/fetch';

export const Route = createFileRoute("/book/$bookId")({
  loader: async ({ params }) => {
    return fetchGoogleBook(params.bookId);
  },
  component : BookPage
 
});
