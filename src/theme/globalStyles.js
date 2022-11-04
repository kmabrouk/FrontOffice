import { createGlobalStyle } from "styled-components";
import Jakartattf from "./fonts/plus_jakarta.ttf";
export const tablet = "600px";
export const desktop = "1024px";
export const hugeScreens = "1440px";

const GlobalStyle = createGlobalStyle `
@font-face{
  font-family: 'Plus Jakarta Sans';
  src: url(${Jakartattf})
}
:root {
    --font-family: 'Plus Jakarta Sans';
    --blue-force: #0A142F;
    --orange-pumpkin: #F27405;
    --white: #ffffff;
    --black: #000000;
    --red: #ff0000;
    --orange-gold: #F29F05;
    --pink: #F20574;
    --violet: #9A0060;
    --pin: #0396A6;
    --disabled: #999999;
    --primary-hover: #B8197C;
    --google-hover: #E6E6E6;
    --primary-disabled: #E8E8E8;
    --categorie: #B33C86;
    --gray-20: #C6C6C6;
    --gray-30: #F2F2F2;
    --gray-40: #666666;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --heading: #0D0D0D;
    --border: #DEDEDE;
    --placeholder: #A6A6A6;
    --label: #636363;
  }
  * {
      font-family: var(--font-family);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`;

export default GlobalStyle;
