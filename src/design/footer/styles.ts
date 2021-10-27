import styled from 'styled-components'
import media from 'media-query-react'
import theme from '../../styles/theme'

export const Container = styled.div`
  background: #222222;
  padding: 15px 0px 0px 0px;
  height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: 20px solid #373737;
  box-shadow: -1px -1.5px 1px green;
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas: 'topoffooter socialmedia newsletter';
    padding: 0px 1rem;
    gap: 2rem;
  }
`

export const TopOfFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1.2rem;
  grid-area: topoffooter;

  ul {
    display: none;
    list-style: none;
    gap: 10px;
  }
  li {
    cursor: pointer;
    :hover {
      color: ${theme.colors.primary};
    }
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
    }
    li {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
    }
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`

export const SocialMedia = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 40px;
  width: 90%;
  grid-area: socialmedia;
  color: white;

  div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    border-right: solid 1px;
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    svg {
      width: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-left: 1px solid white;
    border-right: 1px solid white;
    padding: 0px 20px;
    width: max-content;
    height: 95px;
    justify-content: center;
    align-items: center;
    div:nth-child(1) {
      border-right: none;
    }
    div:nth-child(2) {
      justify-content: center;
    }
  }
`

export const NewsLetter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  grid-area: newsletter;

  section {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    h3 {
      width: 100%;
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      color: #575757;
    }
  }

  div:nth-child(2) {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    border-collapse: collapse;
    input {
      width: 100%;
      height: 30px;
      padding: 9px;
      outline: none;
      border: none;
    }
    button {
      background: ${theme.colors.primary};
      color: white;
      border: none;
    }
  }
  @media (min-width: 768px) {
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
    }
  }
`

export const EndOfFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  width: 100%;
  height: 30px;

  grid-area: 'end';

  span {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
