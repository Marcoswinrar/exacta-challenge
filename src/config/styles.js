import { createGlobalStyle, css } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffced;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export const UserFormFieldStyle = css`
  height: 30px;
  background-color: #fffced;
  border: 2px solid black;

  :focus {
    outline: none;
    border-color: #74b9ff;
  }
`

export const ActionIconStyle = css`
  padding: 8px;
  background-color: #22a6b3;
  border-radius: 15px;
  color: white;
  cursor: pointer;
`
