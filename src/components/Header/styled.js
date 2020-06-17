import styled from 'styled-components'

export const Header = styled.div`
  grid-area: header;
  background-color: #ffffff;
  border-bottom: 2px solid #e5e5e5;
  color: lightslategray;
  display: flex;
  /* pushes everything to the right */
  justify-content: flex-end;
  align-items: center;
  padding: 20px 5px 20px 15px;
`

export const Nav = styled.nav`
  list-style: none;

  li,
  a {
    display: inline-block;
    padding: 0px 20px;
    color: var(--color-primary);
    text-decoration: none;
    font-family: 'Noto Sans JP', sans-serif;
    &:hover {
      color: var(--color-primary-lt);
    }
  }
`
export const UserProfile = styled.i`
  padding: 9px 25px;
  color: var(--color-primary);
  font-size: 23px;
  &:hover {
    color: var(--color-primary-lt);
  }
`

export const Logo = styled.i`
  color: rgb(51, 99, 209, 1);
`

export const LogoWrapper = styled.div`
  margin-right: auto;
`

export const LogoText = styled.span`
  font-family: var(--font-primary);
  font-size: 23px;
  color: var(--color-primary);
`
