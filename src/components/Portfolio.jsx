import React from 'react'
import mongoDB from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import JavaScript from '../../public/javascript.png'
import nodeJS from '../../public/node.png'
import CSS from '../../public/css.jpg'
import HTML from '../../public/html.png'
import ReactJS from '../../public/reactjs.png'


const Portfolio = () => {
  const cardItem = [
    {
      id:1,
      logo:HTML,
      name:"HTML"
    },
    {
      id:2,
      logo:CSS,
      name:"CSS"
    },
    {
      id:3,
      logo:JavaScript,
      name:"JavaScript"
    },
    {
      id:4,
      logo:ReactJS,
      name:"ReactJS"
    },
    {
      id:5,
      logo:nodeJS,
      name:"NodeJS"
    },
    {
      id:6,
      logo:express,
      name:"Express"
    },
    {
      id:7,
      logo:mongoDB,
      name:"MongoDB"
    },
  ]
  return (
    <>
    <div name = "Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
      <span className='underline font-semibold'>Featured Projects</span>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
      {
        cardItem.map(({id,logo,name})=>(
          <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
            <div>
              <div className='px-2 font-bold text-xl mb-2'>{name}</div>
              <p className='px-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='space-x-4 justify-around'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
              <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
            </div>
          </div>
        ))
      }
      </div>
      </div>
    </div>

    </>
  )
}

export default Portfolio