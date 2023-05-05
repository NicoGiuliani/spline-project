import styled from 'styled-components';
import Image from 'next/image';

import IconTwitter from "../images/icon-twitter.svg";
import IconYouTube from "../images/icon-youtube.svg";

export default function SocialComponent() {
  return (
    <Social>
      <div />
      <Image src={IconTwitter} alt="Twitter" />
      <Image src={IconYouTube} alt="YouTube" />
    </Social>
  )
}

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33%,
      #1306dd 65%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 1024px) {
    display: none;
  }
`