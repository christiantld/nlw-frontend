import styled from "styled-components";
import { lighten, darken } from "polished";

import imageBackground from "../../assets/131.png";

export const Container = styled.div`
  height: 100vh;
  background: url(${imageBackground}) no-repeat center right;
  background-size: 550px 450px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin: 15px 0 0;

    .content__logo {
      font-family: "Homemade Apple", sans-serif;
      font-size: 24px;
      padding: 0 10px;
      background: linear-gradient(0.25turn, #5e5eff, #000045);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  main {
    flex: 1;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .content__main__logo {
      font-family: "Homemade Apple", sans-serif;
      font-size: 54px;
      padding: 0 10px;
      background: linear-gradient(0.25turn, #5e5eff, #000045);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .content__main__description {
      font-size: 24px;
      font-weight: 100;
      line-height: 38px;
      color: #000045;
    }

    a {
      width: 100%;
      max-width: 360px;
      height: 68px;
      background: #f53b6b;
      border-radius: 35px;
      text-decoration: none;

      display: flex;
      align-items: center;
      overflow: hidden;
      transition: background 0.3s;

      margin-top: 40px;

      span {
        display: block;
        background: rgba(0, 0, 0, 0.1);
        width: 72px;
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
      }
      svg {
        color: #fafaf9;
        width: 20px;
        height: 20px;
      }

      strong {
        flex: 1;
        text-align: center;
        color: #fafaf9;
      }
    }
  }

  a:hover {
    background: ${darken(0.08, "#f53b6b")};
  }

  a:active {
    background: ${lighten(0.06, "#f53b6b")};
  }
`;
