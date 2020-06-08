import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: #f9f9f5;
  opacity: 0.95;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    width: 68px;
    height: 68px;
    color: #f9f9f5
  }
  a {
    font-size: 16px;
    font-weight: 300;
    line-height: 52px;
    color: #5e5eff;
  }
  }
  h1 {
    font-size: 36px;
    font-weight: 300;
    line-height: 42px;
    color: #5e5eff;
    margin-top: 32px;
  }

  .icon__return{
    width: 16px;
    color: #5e5eff;
  }

  .pulseAnim {
    display: block;
    padding: 16px;
    border-radius: 50%;
    background: #fccd3c;
    box-shadow: 0 0 0 rgba(205, 205, 60, 0.4);
    -moz-animation: pulse 2s infinite;
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(205, 205, 60, 0.7);
    }

    70% {
      box-shadow: 0 0 0 20px rgba(205, 205, 60, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(205, 205, 60, 0);
    }
  }
`;
