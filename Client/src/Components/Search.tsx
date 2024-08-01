import React, { FormEventHandler } from 'react'

type queryProps = {
    changeQuery : React.Dispatch<React.SetStateAction<string>>
}

function Search({changeQuery} : queryProps) {
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    const handleChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };

      const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        changeQuery(searchTerm); 
      };
    

  return (
    <div className='w-full p-2 flex justify-center h-14 mb-8 '>
        <form onSubmit={handleSubmit}>
        <input 
            className='w-56 rounded-md m-4 border-1 p-2 border border-gray-600 focus:outline-blue-500'
            value={searchTerm} 
            placeholder='search Books' 
            onChange={(e) => handleChange(e) }/>
        <button type="submit" className='p-2 m-4 m-2 hover:bg-blue-500 hover:text-white w-24 text-blue-500 border-2 bg-transparent rounded-l-2xl rounded-r-2xl border-blue-500'  >search</button>
        </form>
    </div>
  )
}

export default Search