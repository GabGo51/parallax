import ReactScroll from "./ReactScroll";
import ReactSpring from "./ReactSpring";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Pure from "./Pure";


function App() {
  return (
    <Router>
      <Container>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<ReactSpring/>}/>
          <Route path="/scroll" element={<ReactScroll/>}/> 
          <Route path = '/pure' element={<Pure/>}/>
        </Routes>
        </ParallaxProvider>
      </Container>
    </Router>
    
  );
}

const Container = styled.div`

`

export default App;
