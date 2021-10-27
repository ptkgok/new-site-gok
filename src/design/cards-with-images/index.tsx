import React from 'react';

import * as S from './styles';
import { CardWithImageTypes } from './types';

const CardWithImages: React.FC<CardWithImageTypes> = ({image, tech, title, subtitle, description}) => {
  return (
    <S.Container>
      <S.ImageBox image={image}>
        <S.Border subtitle={subtitle} />
      </S.ImageBox>
      <S.TitleAndDescription>
        <h3>{tech}<br/>{title}</h3>
        <p>{description}</p>
        <span>{subtitle}</span>
      </S.TitleAndDescription>
    </S.Container>
  )
}

export default CardWithImages;