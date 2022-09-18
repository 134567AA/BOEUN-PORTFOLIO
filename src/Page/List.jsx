import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import styled from 'styled-components'
import Skill from './Skill'


const List = ({about,portfolio,skill}) => {


    

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
  
   </>
  )
}

export default List