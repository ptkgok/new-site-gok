import React from 'react';

import * as S from './styles';

const GoNewsHeader: React.FC = () => {
  return (
    <S.Container>
      <S.TitleAndDescription>
        <S.Title>GO<strong>NEWS</strong></S.Title>
        <S.Description>
          Acompanhe nossas novidades e insights do mercado tecnológico. Inovações, projetos e metodologias. Fique por dentro!
        </S.Description>
      </S.TitleAndDescription>
    </S.Container>
  )
}

export default GoNewsHeader;