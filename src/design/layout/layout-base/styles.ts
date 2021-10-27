import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    background: royalblue;
    width: 100%;
    height: 200px;
    margin-top: 60px;
    ${media.greaterThan('medium')`
      height: 280px;
    `}
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 5%;
`