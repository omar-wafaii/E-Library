import { UseQueryResult, useQuery } from '@tanstack/react-query';
import React, { useState, useCallback } from 'react';
import fetchGoogleBooks, { Book } from '../services/google/fetch';
import Search from './Search';
import BookCard from './BookCard';

function Books() {
  const [query, setQuery] = useState<string>("");

  const fetchBooks = useCallback(() => fetchGoogleBooks(query), [query]);

  const { isLoading, error, data: books }: UseQueryResult<Book[], Error> = useQuery<Book[], Error>({
    queryKey: ['books', query],
    queryFn: fetchBooks,
    enabled: !!query,
  });

  console.log("api run");

  if (isLoading) {
    return <div>Fetching posts...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className=''>
      <Search changeQuery={setQuery} />
      <div className='w-full grid grid-cols-4 text-white'>
        {books?.map((book: Book) => (
          <BookCard key={book.id} bookGrid={book} />
        ))}
      </div>
    </div>
  );
}

export default Books;
