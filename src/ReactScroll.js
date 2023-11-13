import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import forest from "./img/forest.jpg";

const ReactScroll = () => {
  
  return (
    <Container>
      <Parallax className='test'
      speed={1}
  translateX={['-300px', '0px']}
  scale={[0.75, 1]}
  rotate={[-180, 0]}
  easing="easeInQuad"
/>
     
    </Container>

  )
}

const Container = styled.div`
background-image: url(${forest});
height: 1500px;
background-size: cover;

.test{
  background-color: red;
  width: 100px;
  height: 100px;
}
`

export default ReactScroll