import React, {useCallback} from 'react'
import { UseQueryResult, useQuery,   } from '@tanstack/react-query';
import { fetchGoogleBook, Book } from '../services/google/fetch';
import { Route } from '../routes/book.$bookId';
import { useLoaderData } from '@tanstack/react-router';

function BookPage() {
    
    const id  = Route.useParams();
    console.log(id);
    const { data: book, error, isLoading } = useLoaderData({ from: '/book/$bookId' });
      if (isLoading) {
        return <div>Fetching posts...</div>;
      }
    
      if (error) {
        return <div>An error occurred: {error.message}</div>;
      }
      console.log("test");
      console.log(book);
  return (
    <div>
      <h1>{book?.title}</h1>
      <img src={book?.thumbnail}/>
      
      
    </div>
  )
}

export default BookPage;