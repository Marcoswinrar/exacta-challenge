import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #e7e5d8;

  a {
    font-size: .8rem;
    font-weight: 600;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    padding: .4rem;
  }

  .active {
    color: #22a6b3;
  }

`