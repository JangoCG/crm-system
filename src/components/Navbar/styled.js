import styled from 'styled-components'

export const NavItem = styled.li`
  height: 30px;
  font-family: var(--font-primary);
  border-bottom: 2px solid lightgrey;
  /* color: rgb(52, 69, 99); */
  color: var(--color-primary);
  &:hover {
    color: var(--color-primary-lt);
  }
  line-height: 20px;
  padding-left: 8px;
  padding-top: 5px;
`
export const Navbar = styled.nav`
  grid-area: navbar;
  background-color: #f4f5f7;
`
