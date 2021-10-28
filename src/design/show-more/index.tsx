import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import theme from '../../styles/theme';
import * as S from './styles'

interface ShowMoreProps {
  url?: string
}

const ShowMoreSeparator: React.FC<ShowMoreProps> = ({ url }) => {

  return (
    <S.Container href={url}>
      <S.SeeMore>
        <span>Veja mais</span>
        <AiFillCaretDown color={theme.colors.primary} />
      </S.SeeMore>
    </S.Container>
  )
}

export default ShowMoreSeparator;