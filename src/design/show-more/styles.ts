import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.a`
  margin: 50px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.text};
  ::before, ::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.primary};
  }
`;

export const SeeMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    white-space: nowrap;
    letter-spacing: 1px;
    margin: 0px 20px;
    font-weight: 300;
  }
  :hover {
    cursor: pointer;
    transform: translateY(-4.5px);
  }
`

export const Triangle = styled.div`
  width: 18px;
  height: 14px;
  border: 1px solid #3ED206;
  box-sizing: border-box;
  transform: matrix(1, 0, 0, -1, 0, 0);
`