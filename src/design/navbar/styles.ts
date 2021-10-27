import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 0.2px ${theme.colors.primary};
  height: 60px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  z-index: 50;
  background-color: ${theme.colors.background};

  ${media.lessThan('medium')`
    flex-direction: row-reverse;
  `}
`
export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  ${media.lessThan('medium')`
    display: none;
  `}
`
export const Option = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 300;
  font-size: 1rem;

  :hover {
    color: ${theme.colors.primary};
  }
`

export const MenuButtonAndItemsSide = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 0%;
  `}
`
