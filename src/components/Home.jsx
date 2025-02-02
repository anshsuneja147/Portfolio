import React from 'react'
import { FaFacebookSquare,FaLinkedin,FaReact } from "react-icons/fa";
import { SiMongodb,SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import mypic from '../../public/MyImg.png'

const Home = () => {
  return (
    <>
    <div 
    name = "Home"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col   md:flex-row'>
       <div className='md:w-1/2 mt-12 md:mt-24 space-y-2  order-2 md:order-1'>
        <span className='text-xl'>Welcome in my feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello , I'm a </h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped
          // typedRef={setTyped}
          className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={50}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm text-justify md:text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla sint, molestiae cum impedit distinctio beatae tenetur perferendis optio eaque velit quo molestias aut similique ipsam corrupti totam minima neque, non architecto atque. Laboriosam architecto neque vero suscipit voluptate alias laborum sequi veritatis. Itaque odit consequuntur sit nulla qui reiciendis, molestiae repellendus corporis libero eos facere magni voluptatibus repellat ipsa!</p>
        <br />
        {/* Social media icons */}
       <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
       <div className='space-y-2'>
          <h1 className='font-bold'>Available on</h1>
          <ul className='flex space-x-5'>
         <li>
          <a href="https://www.facebook.com/ansh.suneja" target='_blank'>
          {" "}
          <FaFacebookSquare  className='text-2xl cursor-pointer'/>
          </a>
          </li> 
          <li>
            <a href="https://in.linkedin.com/in/ansh-suneja-376625145" target='_blank'>
          {" "}
            <FaLinkedin className='text-2xl cursor-pointer' />
            </a>
            </li>
          </ul>
        </div>
        <div className='space-y-2'>
        <h1 className='font-bold'>Currently Working on</h1>
         <div className='flex space-x-5'>
          <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
          <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
          <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
          <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
         </div>
       </div>
        </div>
       </div>
        <div className='md:w-1/2 md:ml-48 md:mt-5 mt-8  order-1'>
          <img src={mypic} className='rounded-full ml-12 w-[300px] h-[300px] bg-orange-500 md:w-[450px] md:h-[450px]' alt="" />
        </div>
       </div>
    </div>
      <hr />
    </>
  )
}

export default Home