import React from 'react';
import * as S from './styles'
import { SectionsNews } from './types';

const SectionsGoNews: React.FC<SectionsNews> = ({ reverse, image, title, description }) => {
  return (
    <S.Container reverse={reverse}>
      <img src={image} alt="" />
      <S.TextAndDescription>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.TextAndDescription>
    </S.Container>
  )
}

export default SectionsGoNews;