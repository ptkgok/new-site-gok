import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  height: 100%;
  margin-top: -80px;
  z-index: 9999;
  display: grid;
  grid-template-columns: 1fr 2fr;

  ${media.greaterThan('medium')`
    margin-top: -20px;
  `}
`

export const Left = styled.div`
  width: 100%;
  padding-left: 15px;
  display: flex;

  h1 {
    transform: rotate(90deg);
    text-align: center;
    font-size: 3.5rem;
    margin-left: -100px;
    ${media.greaterThan('medium')`
      transform: rotate(0deg);
    `}
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 10px;
    display: none;
    align-items: center;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-left: -160px;
  }

  ${media.greaterThan('medium')`
    padding-left: 13.5rem;

    span {
      display: flex;
    }
  `}
`
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`

export const Right = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  gap: 20px;
`
