'use client'

import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Contentcomponent from './content';
import SocialComponent from './social';

export default function App() {
  return (
    <Wrapper>
      <Spline className="spline" scene="https://prod.spline.design/kUmGM7WXdnheqyur/scene.splinecode" />
      <Contentcomponent />
      <SocialComponent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  
  .spline canvas {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.6) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -300px;
    }
  }
`;
