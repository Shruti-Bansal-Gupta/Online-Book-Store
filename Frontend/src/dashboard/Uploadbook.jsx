import React, { useState } from 'react'
import { Label, TextInput } from "flowbite-react";

const Uploadbook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help books",
    "Memoir",
    "Business books",
    "Children books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [SelectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  return (
       
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

         {/* first row */}
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle"
        name='bookTitle'
         type="text" placeholder="Book name" 
         required />
      </div>

      {/* authorname */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author name" />
        </div>
        <TextInput id="authorName"
        name='authorName'
         type="text" placeholder="Author name" 
         required />
      </div>
     </div>

     {/*second row */}
     <div className='flex gap-8'>
     <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageURL"
        name='imageURL'
         type="text" placeholder="Book image URL" 
         required />
      </div>

      {/* category */}
      <div className='lg:w-1/2'>
       
        
      </div>
     </div>

    </form>
    </div>
  )
}

export default Uploadbook
