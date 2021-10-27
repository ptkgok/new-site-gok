import styled from 'styled-components';
import media from 'styled-media-query';
import theme from '../../../styles/theme';
import { SectionsNews } from './types';

export const Container = styled.div<SectionsNews>`
  display: flex;
  flex-direction: ${ prop => prop.reverse ? "row-reverse" : "row" };
  margin-top: 10px;
  img {
    width: 140px;
    height: 84.89px;
    margin-top: -30px;
  }

  ${media.greaterThan('medium')`
    img {
      width: 303.07px;
      height: 216.05px;
    }
  `}
`;

export const TextAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 10px;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    display: flex;
    ::before {
      content: '';
      width: 10px;
      height: 100%;
      background: ${theme.colors.primary};
      display: block;
      margin-right: 5px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 160%;
  }


  ${media.greaterThan('medium')`
    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
    }

    p {
      font-size: 12px;
      line-height: 160%;
    }
  `}
`