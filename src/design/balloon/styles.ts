import styled from 'styled-components';
import { BalloonTypes } from './types';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  margin: 0;
  padding: 0;
  height: max-content;
  position: relative;
  @media (max-width: 705px) {
    align-items: flex-start;
  }
`;

export const Content = styled.div<BalloonTypes>`
    position: relative;
    bottom: 30px;
    left: 50px;
    width: 400px;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 4px;
    right: ${prop => prop.side === "right" ? "-50px" : ""};
    left: ${prop => prop.side === "left" ? "-430px" : ""};

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140%;
    }

    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 20px;
    }

    @media (max-width: 705px) {
        left: 30px;
        width: 260px;

        h2 {
            font-size: 1.2rem;
        }
    }
`

export const Item = styled.li`
    position: relative;
    list-style: none;
    width: 20px;
    height: 20px;
    background: #fff;
    margin: 0 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;
    color: black;
    z-index:10;
    ::before {
        content: '';
        background: #fff;
        width: 4px;
        height: 110px;
        display: block;
        margin-top: 26px;
        margin-left: 7.5px;
        position: absolute;
        z-index: 0;
    }
    :hover {
        background: #86ff3b;
        box-shadow: 0 0 0 4px #333,
        0 0 0 6px #86ff3b;
        ${Content} {
            visibility: visible;
        }
    }
`
