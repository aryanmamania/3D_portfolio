import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from "../assets/icons"


const InfoBox = ({ text, link, btnText })=> (
    <div className='info-box'>
<p className='font-medium sm:text-xl text-center'>{text}</p>
<Link to ={link} className='neo-brutalism-white neo-btn'>
    {btnText}
    <img src={arrow} className='w-4 h-4 object-contain'/>
</Link>
    </div>
)

const renderContent = {
1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>

        Hi I am Aryan Mamania
        A full Stack developer 
    </h1>
),
2: (
   <InfoBox

  text= "Intern in Vedspace ventures"
  link="/about"
  btnText="Learn More"
  />
),
3 : (
    <InfoBox

  text= "Projects"
  link="/Projects"
  btnText="Visit My portfolio"
  />
),
4:(
    <InfoBox

  text= "Lets talk"
  link="/contact"
  btnText="Lets talk"
  />
),
}



const HomeInfo = ( {currentStage }) => {
  return 
  renderContent[currentStage] || null;
  
}

export default HomeInfo
