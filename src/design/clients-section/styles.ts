import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px 0px 50px 50px;
  background: #F7F7F7;
  display: flex;
  flex-direction: column;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  margin-top: 10px;
  gap: 10px;
`
export const CardWithClient = styled.div`
  width: 112.61px;
  height: 59.16px;
  background: #FFFFFF;
  border-radius: 7.51332px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  img {
    width: 100%;
    height: auto;
    filter: grayscale(100%);
  }
`