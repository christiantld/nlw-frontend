import { createGlobalStyle } from "styled-components";

import WaterlilyTff from "../fonts/WaterlilyScript.ttf";
export default createGlobalStyle`
   @font-face {
        font-family: 'Waterlily';
        src: local('Water lily'), local('Waterlily'),
        url(${WaterlilyTff});
        font-weight: 300;
        font-style: normal;
    }
`;
