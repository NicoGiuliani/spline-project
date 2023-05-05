import styled from 'styled-components';
import Image from 'next/image';
import Logo from "../images/logo.svg";

export default function MenuComponent() {
  return (
    <Menu>
      <li><Image src={Logo} alt="Logo" /></li>
      <li><a href="/">Home</a></li>
      <li><a href="/">Download</a></li>
      <li><a href="/">App</a></li>
      <li><a href="/">Login</a></li>
      <li><button>Get Started</button></li>
    </Menu>
  )
}

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`
