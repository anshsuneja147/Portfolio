import React from 'react'
// import mongoDB from '../../public/mongodb.jpg'
// import express from '../../public/express.png'
import JavaScript from '../../public/javascript.png'
// import nodeJS from '../../public/node.png'
import CSS from '../../public/css.jpg'
import HTML from '../../public/html.png'
import ReactJS from '../../public/reactjs.png'


const Experience = () => {
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

  ]
  return (
    <>
    <div  name = "Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-16'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>Experience</h1>
      <p className=''>I have more than 6 months of experience in below technologies</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 my-5'>
      {
        cardItem.map(({id,logo,name})=>(
          <div className='flex flex-col items-center justify-center rounded-full p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
            <img src={logo} className='w-[120px] h-[120px] p-5 rounded-full border-[2px]' alt="" />
            <div>
              <div className='px-2 font-bold text-xl mb-2'>{name}</div>
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

export default Experience