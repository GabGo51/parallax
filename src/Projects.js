import React from 'react'
import {Parallax} from 'react-parallax'
import project1 from './img/CMS.png'
import project2 from './img/proj1.png'
import project3 from './img/proj3.PNG'
import styled from 'styled-components'

const Projects = () => {
  return (
    <Container>
      <Parallax className='para' strength={400} bgImage = {project1}>
        <div className='content'>
          <div className='text-content'>CMS Website</div>
        </div>
      </Parallax>
      <Parallax className='para' strength={400} bgImage = {project2}>
        <div className='content'>
          <div className='text-content'>BLOOM</div>
        </div>
      </Parallax>
      <Parallax className='para' strength={400} bgImage = {project3}>
        <div className='content'>
          <div className='text-content'>E-Commerce</div>
        </div>
      </Parallax>
      <div className='content'></div>
      
    </Container>
  )
}

const Container = styled.div`


.content{
  height: 100vh;
}
.text-content{
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5px 15px;
  transform: translate(-50%, -50%);
}
`

export default Projects