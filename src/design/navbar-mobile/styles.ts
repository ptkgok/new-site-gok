import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: ${theme.colors.primary} 1px solid;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -200%;
  background: ${theme.colors.text};

  transition: all 0.5s;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 20px;
    padding-top: 20px;
  }
`
export const HeaderOfMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-bottom: solid 1px ${theme.colors.primary};
  color: ${theme.colors.primary};
`

export const GeneralContainer = styled.div`
  label {
    position: absolute;
    top: -10px;
    left: 10px;
    z-index: 9999;
    display: none;
    ${media.lessThan('medium')`
      display: flex;
    `}
  }

  input[type='checkbox'] {
    display: none;
  }

  input:checked ~ ${Container} {
    transition: all 0.5s;
    left: 0;
    z-index: 90;
  }
`
export const Option = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 1.6rem;

  :hover {
    color: ${theme.colors.primary};
  }
`
