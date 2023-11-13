import React from 'react'
import styled from 'styled-components'

const Pure = () => {
  return (
    <Container>
      <Wrapper>
        <div className='blue'></div>
        <div className='red'></div>

      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
width: 100vh;
height: 100vw;
transform-origin:top left ;
transform: rotate(-90deg) translateX(-100vh);
overflow-y: scroll;
`

const Wrapper =styled.div`
display: flex;
width: 200vw;
transform-origin: top left;
transform: rotate(90deg)translateY(-100vh);

.blue{
  background-color: blue;
  width: 100vw;
  height: 100vh;
}

.red{
  background-color: red;
  width: 100vw;
  height: 100vh;
}
`

export default Pure