import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {}

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    font-family:ヒラギノ角ゴ Pro,Hiragino Kaku Gothic Pro,Hiragino Sans,Noto Sans CJK JP,Osaka,Meiryo,メイリオ,MS PGothic,ＭＳ Ｐゴシック,YuGothic,Yu Gothic,Hiragino Sans GB,Helvetica Neue,HelveticaNeue,Helvetica,Noto Sans,Roboto,Arial,Arial Unicode MS,sans-serif
}

a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  outline:0
}

hr {
    border-left: none;
    border-right: none;
    border-top: none;
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;
    line-height: 1.5;
}

/* ::-webkit-scrollbar {
    display: none;
} */

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

p {
    margin: 0;
}

@font-face {
    font-family: "UniqloProRegular";
    font-weight: 400;
    font-style: normal;
    src: local("UniqloProRegular"), url(/fonts/UNIQLOReg.ttf) format("truetype");
}

/* toast style */
.Toastify__toast-body > div:last-child {
    font-weight: bold;
    color: red;
}

.Toastify__toast-container {
    width: 22rem;
    top: var(--toastify-toast-top);
    left: 50%;
    transform: translateX(-50%);
}
`;

export default GlobalStyles;
