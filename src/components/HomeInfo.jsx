import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Aryan Mamania</span>
       
       <br/>
        A full Stack developer from Delhi , India
      </h1>
    );

  if (currentStage === 5) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Want to see my Skills and <br/> certification Courses
      </p>

      <Link to='/About' className='neo-brutalism-white neo-btn'>
Click Here
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
   Let's check out my work experience
      </p>

      <Link to='/About' className='neo-brutalism-white neo-btn'>
       Click Here
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      I also made many projects <br /> Here are few of them
      </p>

      <Link to='/projects' className='neo-brutalism-white neo-btn'>
       CLick Here
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }



  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
