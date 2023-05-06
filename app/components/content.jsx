import styled from 'styled-components';
import Image from 'next/image';

import IconLaptop from "../images/icon-laptop.svg";
import MenuComponent from './menu';

export default function ContentComponent() {
  return (
    <Content>
      <MenuComponent />
      <h1>Collaborate with people</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam sunt molestiae quidem, optio temporibus.</p>
      <button><Image src={IconLaptop} alt="Download" />Download for Mac</button>
    </Content>
  )
}

const Content = styled.div`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: 'Spline Sans Mono', monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1, p, button {
    margin: 0 30px 0 100px;
    z-index: 101;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;
