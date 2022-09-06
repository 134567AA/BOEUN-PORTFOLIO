import React,{useRef} from 'react'
import * as Styled from '../Style/Style'
import List from '../Page/List'
import Slider from 'react-slick'

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
    const contactClick = ()=>{
        contact.current?.scrollIntoView({ behavior: 'smooth'});
    }
  return (
    <>
     
    <Styled.topbar className='topbar'>     
   <p className= "pt-3" ><a href="https://github.com/134567AA" target='_blank'> BOO's Portfolio</a></p>
       <li onClick={aboutClick}>About</li>
       <li onClick={featuresClick}>Skill</li>
       <li onClick={portfolioClick}>Portfolio</li>   
       <li onClick={contactClick}>Contact</li>   
    </Styled.topbar>

    
<Styled.topside>
    <List about={about} features={skill} portfolio={portfolio} contact={contact}/>
</Styled.topside>
    
    </>
  )
}

export default Top