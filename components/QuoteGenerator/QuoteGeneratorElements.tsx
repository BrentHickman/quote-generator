import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to right, #000000, #ffffff);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0%{
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 120px;
  margin-top: 10px;
  opacity: .8;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  margin-left: -120px;
  margin-top: 10px;
  animation: opacity 8s ease infinite;
  @keyframes opacity {
    0%{
      opacity: .9;
    }
    50% {
      opacity: .3;
    }
    100% {
      opacity: .9;
    }
  }
  
`;