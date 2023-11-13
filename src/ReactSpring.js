import React from 'react'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from "styled-components";
import forest from "./img/forest.jpg";
import dank from "./img/dank1.jpg";
import mont from "./img/mont.jpg";


const ReactSpring = () => {
  return (
    <Container>
    <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.01} className="first-img">
          <img src={forest} />
        </ParallaxLayer>
        <ParallaxLayer factor={2} offset={1} className="green"></ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={-0.2}>
          <h2>FEEEEEEEEEEEEEEENNNNNNNNNNNZZZZZZZ</h2>
        </ParallaxLayer>
        <ParallaxLayer
          className="dank"
          horizontal = 'true'
          speed={0.5}
          offset={0.7}
          sticky={{ start: 0.7, end: 2.4 }}
        >
          <img src={dank} />
        </ParallaxLayer>
        <ParallaxLayer className="mountain" offset={2.8}>
          <img src={mont} />
        </ParallaxLayer>
      </Parallax>
      </Container>
  )
}

const Container = styled.div`

h2 {
    font-size: 60px;
    margin: 100px;
    object-fit: cover;
    
  }
  .first-img {
    img {
      width: 100vw;
    }
  }

  .green {
    background-color: #121e12;
  }

  .dank {
    width: 100vw;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
  }

  .montain {
    img {
      width: 100vw;
    }
  }

 
`;


export default ReactSpring