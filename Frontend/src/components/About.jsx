import React from 'react'
import image from '../assets/people.jpg'
import image1 from '../assets/aboutimage.jpeg'

const About = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <section className="bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
      <p className="mb-4 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime rem aliquid sequi totam suscipit alias
       repudiandae dolores odit? Ad beatae iste quam, expedita ducimus praesentium officiis mollitia consequatur quo? Lorem ipsum, dolor 
       sit amet consectetur adipisicing elit. Iure perferendis officiis iste ea sed beatae, esse voluptatum enim necessitatibus eaque molestiae. 
       Ratione asperiores animi id nostrum delectus nobis, dolorum ipsa!</p>
    </div>
    <div className="">
      {/* <img className="w-full max-w-xl rounded-lg" src={image1} alt="office content 1" /> */}
      <img className="mt-4 max-w-xl w-full lg:mt-10 rounded-lg" src={image} alt="office content 2" />
    </div>
  </div>
</section>

    </div>
  )
}

export default About
