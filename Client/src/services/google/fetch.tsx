import axios from "axios"


  export type Book = {
    id: string;
    title: string;
    authors: string[];
    description: string;
    thumbnail? : string; 
  }

  async function fetchGoogleBooks(query: string): Promise<Book[]> {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const books = response.data.items.map((book:any) : Book => ({
            id : book.id,
            title : book.volumeInfo.title,
            authors : book.volumeInfo.authors ?? [],
            description : book.volumeInfo.description ?? "No description available",
            thumbnail : book.volumeInfo.imageLinks?.thumbnail ?? ""
        }))
        return books;
    } catch (error) {
        console.error("Error fetching data from Google Books API", error);
        return [];
    }
  }

export default fetchGoogleBooks;