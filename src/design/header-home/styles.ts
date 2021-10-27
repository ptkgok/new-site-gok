import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 60px;
  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
  min-height: 481px;
  border-bottom: solid ${theme.colors.primary} 1px;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95%;
  margin: 0 auto;
  text-align: left;
  z-index: 10;
  padding-left: 1rem;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 170%;
  }

  ${media.greaterThan('medium')`
    padding-left: 13rem;
    justify-content: center;
  `}
`

export const Image = styled.div`
  width: 100%;
  img {
    z-index: 0;
    width: max-content;
    position: absolute;
    right: 0;

    ${media.lessThan('medium')`
      position: relative;
      width: 100%;
    `}
  }
`
