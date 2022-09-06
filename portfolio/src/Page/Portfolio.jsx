import React,{useState} from 'react'
import * as Styled from '../Style/Style'
import { Carousel,CarouselItem} from 'react-bootstrap'


const Portfolio = () => {

  const [index,setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Styled.portfolioBox className='test'>
      <Carousel interval={3000} style={{height : '100%'}}>
      <CarouselItem >
          <div>
            <p>Movie page</p>
          </div>
      </CarouselItem>
      <CarouselItem>
        카페
      </CarouselItem>
      <CarouselItem>
        react blog (react + node)
      </CarouselItem>
      <CarouselItem>
        경기도 맛집리스트 (react + SQL)
      </CarouselItem>
      <CarouselItem>
        클론코딩 (daum cafe / starbucks)
      </CarouselItem>
      </Carousel>
    </Styled.portfolioBox>

</>
  )
}

export default Portfolio