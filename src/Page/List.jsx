import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import * as Styled from '../Style/Style'
import $ from 'jquery';
import Skill from './Skill'


const List = ({about,portfolio,skill}) => {    
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100){
      $('.top').show();
    } else{
      $('.top').hide();
    }
  });
   const scrolltop = ()=>{ 
       window.scrollTo({
      top: 0,
      behavior: 'smooth'})
  

  }
 
   

  return (
   <>

   <div ref={about}>
    <About />
   </div>
   <div ref={skill}>    
   <Skill />
    </div>
    <div ref={portfolio}>
    <Portfolio />
    </div>
    <Styled.top  className="top" onClick={scrolltop} >
    TOP
    </Styled.top>
   </>
  )
}

export default List