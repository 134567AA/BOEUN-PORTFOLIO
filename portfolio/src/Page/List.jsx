import React from 'react'
import About from './About'
import Features from './Features'
import Portfolio from './Portfolio'
import styled from 'styled-components'
import * as Styled from '../Style/Style'
import Contact from './Contact'


const List = ({about,portfolio,features,contact}) => {


  return (
   <>
   <div ref={about}>
    <About />
   </div>
   <div ref={features}>
   <Features />
    </div>
    <div ref={portfolio}>
    <Portfolio />
    </div>
    <div ref={contact}>
    <Contact />
    </div>
   </>
  )
}

export default List