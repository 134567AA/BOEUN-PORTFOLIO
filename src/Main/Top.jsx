import React,{useRef} from 'react'
import * as Styled from '../Style/Style'
import List from '../Page/List'
import $ from 'jquery'

const Top = () => {
    const about = useRef();
    const skill = useRef();
    const portfolio = useRef();
    const contact = useRef();


 

    const aboutClick = ()=>{
        about.current?.scrollIntoView({ behavior: 'smooth'});
    }
    const featuresClick = ()=>{
        skill.current?.scrollIntoView({ behavior: 'smooth'});
    }
    const portfolioClick = ()=>{
        portfolio.current?.scrollIntoView({ behavior: 'smooth'});
    }

  return (
    <>
     
    <Styled.topbar className='topbar'>     
   <p className= "pt-3" ><a href="https://github.com/134567AA" target='_blank'> BOO's Portfolio</a></p>
       <li onClick={aboutClick}>About</li>
       <li onClick={featuresClick}>Skill</li>
       <li onClick={portfolioClick}>Portfolio</li>   
    </Styled.topbar>

<Styled.topside className='topside'>
    <List about={about} skill={skill} portfolio={portfolio} />
</Styled.topside>
    
    </>
  )
}

export default Top