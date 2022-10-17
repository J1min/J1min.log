import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle` 
@font-face {
  font-family: 'IBMPlexSansKR-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
  font-size: 20px;
  min-width: 320px;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-family: 'IBMPlexSansKR-Regular';
}

blockquote {
  border-left: 5px solid ${theme.color.main};
  margin: 10px;
  padding: 10px;
}

.ql-blank {
  font-family: 'IBMPlexSansKR-Regular';
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.color.theme};
  color: ${theme.color.main};
  border: 0 !important;
  border-radius: 6px !important;
}
.ql-toolbar {
  border-radius: 6px !important;
  border: 1px solid  ${theme.color.main} !important;
  font-family: 'IBMPlexSansKR-Regular';
  border-bottom: 0 !important;
}
.ql-container {
  border-radius: 6px !important;
  border: 1px solid  ${theme.color.main} !important;
}
.ql-picker-label::before {
  color: ${theme.color.main};
}
.ql-snow, .ql-stroke {
  stroke: ${theme.color.main} !important;
}
.ql-picker,pre.ql-syntax {
  font-family: 'IBMPlexSansKR-Regular';
}
.ql-editor {
  font-size: 16px;
  font-family: 'IBMPlexSansKR-Regular';
  height: 450px;
}
.ql-editor::-webkit-scrollbar {
  width: 8px;
}
.ql-editor::-webkit-scrollbar-thumb {
  height: 10%;
  background: ${theme.color.main};
  border-radius: 10px;
}
.ql-editor::-webkit-scrollbar-track {
}

body {
  margin: 0;
  color: ${theme.color.main} !important;
  background-color: ${theme.color.theme} !important;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  height: 10%;
  background-color: ${theme.color.main};
}
::-webkit-scrollbar-track {
}


main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;