import styled from 'styled-components'

interface CardNewsProps {
  background?: string
}

export const Container = styled.div<CardNewsProps>`
  min-width: 283.44px;
  min-height: 200px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  background: ${props => `url(${props.background})` || ''};
  background-color: #ffffff;
  border-radius: 10px;
  background-size: fill;
  background-position: center center;
  border: solid 0.1px #e6e6e6;
`
