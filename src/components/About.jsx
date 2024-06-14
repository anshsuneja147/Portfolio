import React from 'react'

const About = () => {
  return (
    <>
    <div name = "About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-14'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>Hello, I'm Ansh, a passionate Web Developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression </p>
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Education & Training</h1>
        <span>[B.tech/Computer Science Engineering],[CEC Landran,Mohali],[2015-19]</span>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Skills & Expertise</h1>
        <span>Proficient in [HTML,CSS,JavaScript,React,SQL]</span>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Professional Experience</h1>
        <span>No Professional Experience in Web Development. <br />
           Past Experience ,Worked as<br />
            <span className='font-bold'>[Data Analyst],[Udaan B2B]</span>,[Designed First Mile and Last Mile Performance Dashboards, Handled Cash On delivery and Maintained and reduced the cash frauds]
        </span><br />
        <span>
        <span className='font-bold'>[Lead Planning Analyst,Perishables],[Swiggy Instamart]</span>
        Created Automation process for Demand Planning of Fresh Items, Created many stock availability reports and improved the planning performance
        </span>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Mission Statement</h1>
        <span>My mission is to leverage my skills and creativity to deliver innovative[Software] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</span>
    </div>
    
    </>
  )
}

export default About