import React from 'react'
import * as Styled from '../Style/Style'
import $ from 'jquery';


const About = () => {
 const showBar = ()=>{
     $('.topbar,.aboutIn,.test').fadeIn(2000);
    // $('.testImg').css('display',"none");
 }

  return (
   <>

   <Styled.aboutBox>   
    <Styled.titleImg variants={Styled.firstVeriants} initial={Styled.firstVeriants.start} animate={Styled.firstVeriants.end} whileHover={Styled.firstVeriants.hover}>
      <p className='click'>Click Me</p>
      <img src="img/notebook.png" className='testImg' alt="폭탄" onClick={showBar} />   
    </Styled.titleImg>
      
      <div className='aboutIn'>
        <p>Front-End Developer</p>
        <p>나능야 폭군 티라노사우르스
          몸길이 15M 키는 5M 몸무게 7톤
        </p>
      <p>교육과정</p>
      </div>
   

  

   </Styled.aboutBox>
   </>
  )
}

export default About