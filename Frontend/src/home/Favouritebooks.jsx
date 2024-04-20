import React, { useEffect,useState } from 'react'
import BookCards from '../components/BookCards';

const Favouritebooks = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data))
    }, [])
  return (
    <div>
       <BookCards books={books} headline="Best seller Books"/>
    </div>
  )
}

export default Favouritebooks
