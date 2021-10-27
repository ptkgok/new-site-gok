import React from 'react';

import * as S from './styles'

const ShowMoreSeparator: React.FC = () => {
  return (
    <S.Container>
      <S.SeeMore>
      <span>Veja mais</span>
      <S.Triangle />
      </S.SeeMore>
    </S.Container>
  )
}

export default ShowMoreSeparator;