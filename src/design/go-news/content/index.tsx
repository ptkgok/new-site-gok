import React from 'react';
import { SectionsGoNewsData } from '../../../data/sections-news';
import SectionsGoNews from '../sections-news';

import * as S from './styles';

const ContentGoNews: React.FC = () => {
  return (
    <S.Container>
      {SectionsGoNewsData.map((section) => (
        <SectionsGoNews key={section.id} {...section} />
      ))}
    </S.Container>
  )
}

export default ContentGoNews;