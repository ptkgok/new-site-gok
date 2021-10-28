import styled from 'styled-components';
import media from 'styled-media-query';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${theme.colors.primary};
  border-top: 1px solid ${theme.colors.primary};
  padding: 5px 3px;
  display: flex;
  margin: 50px 0px;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  ::before, ::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;

    background-image: radial-gradient(${theme.colors.text} 20%, transparent 20%),
      radial-gradient(${theme.colors.text} 20%, transparent 20%);
    background-color: white;
    background-position: 0 0, 50px 50px;
    background-size: 10px 10px;

    
  ${media.lessThan('medium')`
    display: none;
  `}
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  padding: 0px 20px;
  color: ${theme.colors.text};

  border-right: solid 1px ${theme.colors.primary};
  strong {
    text-shadow: 0px 0px 1px ${theme.colors.text};
    color: ${theme.colors.background};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

    ::before, ::after {
      content: '';
      display: none;
      width: 100%;
      height: 100%;
      
      background-image: radial-gradient(${theme.colors.text} 20%, transparent 20%),
      radial-gradient(${theme.colors.text} 20%, transparent 20%);
      background-color: white;
      background-position: 0 0, 50px 50px;
      background-size: 10px 10px;


      ${media.lessThan('medium')`
        display: block;
      `}
  }

  ${media.lessThan('medium')`
    display: flex;
    width: 100%;
    padding: 0px;
  `}
`

export const Description = styled.p`
  font-size: 0.90rem;
  color: ${theme.colors.text};
  width: 60%;
  line-height: 17px;
  padding: 0px 20px;
  ${media.lessThan('medium')`
      text-align: center;
  `}
`