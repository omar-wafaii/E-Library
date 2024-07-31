import { UseQueryResult, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import fetchGoogleBooks, { Book } from '../services/google/fetch';



function Books() {
    const [query, setQuery] = useState<string>("");

    const {
        isLoading,
        error,
       data : books
      } : UseQueryResult<Book[], Error> = useQuery<Book[], Error>({ queryKey : ['books', query],
        queryFn : ()=> fetchGoogleBooks(query),
        enabled : !!query
    } );
    if(isLoading){return <div>Fetching posts...</div>;}
    if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
        
    </div>
  )
}

export default Books