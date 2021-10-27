import React from 'react';
import Footer from '../../footer';
import Navbar from '../../navbar';

import * as S from './styles';
import { LayoutBaseTypes } from './types';

const LayoutBase: React.FC<LayoutBaseTypes> = ({header,content}) => {
  return (
      <S.Container>
        <Navbar />
          <S.Header>{header}</S.Header>
          <S.Content>{content}</S.Content>
          <Footer />
      </S.Container>
  )
}

export default LayoutBase;