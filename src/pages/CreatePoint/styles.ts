import styled from "styled-components";
import { lighten, darken } from "polished";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;

export const Content = styled.div`
  header {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content__logo {
      font-family: "Homemade Apple", sans-serif;
      font-size: 24px;
      padding: 0 18px;
      background: linear-gradient(0.25turn, #5e5eff, #000045);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    a {
      color: #5e5eff;
      font-weight: bold;
      text-decoration: none;

      display: flex;
      align-items: center;
      transition: color 0.3s;
    }

    a:hover {
      color: #fccd3c;
    }

    svg {
      margin-right: 16px;
      color: #fccd3c;
    }
  }
`;

export const Form = styled.form`
  margin: 40px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
    font-weight: 400;
    color: #000045;
  }

  button {
    width: 260px;
    height: 56px;
    background: #f53b6b;
    border-radius: 35px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: ${darken(0.08, "#f53b6b")};
    }

    &:active {
      background: ${lighten(0.06, "#f53b6b")};
    }
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;

    .leaflet-container {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      h2 {
        font-size: 24px;
        font-weight: 100;
        color: #000045;
      }

      span {
        font-size: 14px;
        color: #fccd3c;
      }
    }

    .field {
      flex: 1;

      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      color: #5e5eff;
      font-weight: 100;

      input[type="text"],
      input[type="email"],
      input[type="number"] {
        flex: 1;
        background: #eee;
        border-radius: 10px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c6c80;
      }

      input::placeholder {
        color: #a0a0b2;
      }

      label {
        font-size: 14px;
        margin-bottom: 8px;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #eee;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c6c80;
      }
    }

    .items-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      list-style: none;

      li {
        background: ${darken(0.02, "#90aeff")};
        border: 2px solid #fccd3c;
        height: 180px;
        border-radius: 8px;
        padding: 32px 24px 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        cursor: pointer;

        .service__image {
          height: 80%;
          width: 80%;
        }

        &.selected {
          background: ${lighten(0.2, "#fccd3c")};
          border: 2px solid #90aeff;
          box-shadow: 0 0 8px #90aeff;
        }

        span {
          flex: 1;
          margin-top: 12px;

          display: flex;
          align-items: center;
          color: #000045;
        }
      }
    }

    .field-group {
      flex: 1;
      display: flex;

      .field + .field {
        margin-left: 15px;
      }
    }
  }
`;
