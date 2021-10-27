import styled from 'styled-components';
import media from 'styled-media-query';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  display: flex;
  gap: 15px;
  ::after {
    content: ' ';
    display: block;
    width: 100px;
    height: auto;
    margin-top: 5px;
    background: url("https://res.cloudinary.com/code-comunity/image/upload/v1632454319/site-gok/btn_os31x2.svg");
    background-repeat: no-repeat;
  }
`

export const Description = styled.p`
  font-size: 1em;
  text-align: left;
`
export const CardTitleAndDescription = styled.div`
  display: flex;
  gap: 20px;
  padding: 55px 0px;

  img {
    width: 330px;
    height: 200px;
  }

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    div:first-child {
      width: 100%;
      height: 90px;
      background: ${theme.colors.text};
      left: 0;
    }
    img:first-child {
      width: 186.79px;
      height: 113.21px;
    }
    span {
      position: absolute;
      right: 35px;
      margin-top: -75px;
      color: white;
    }
  `}
`

export const CardsWithImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`