import React from 'react';
import { HeaderTypes } from './types';
import { BsArrowLeft } from 'react-icons/bs'

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';

const Header: React.FC<HeaderTypes> = ({ title, description, image, bgSize }) => {

  const route = useRouter()

  return (
    <S.Container image={image} bgSize={bgSize}>
      <S.ButtonBackHeader onClick={() => route.back()}> <BsArrowLeft /> Voltar </S.ButtonBackHeader>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  )
}

export default Header;