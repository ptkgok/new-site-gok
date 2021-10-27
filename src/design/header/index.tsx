import React from 'react';
import { HeaderTypes } from './types';

import * as S from './styles';

const Header: React.FC<HeaderTypes> = ({title,description, image, bgSize}) => {
  return (
    <S.Container image={image} bgSize={bgSize}>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    </S.Container>
  )
}

export default Header;