import React from 'react'

import * as S from './styles'

export type Props = {
  url: string
}

const CardNews: React.FC<Props> = ({ url }) => {
  return <S.Container background={url}></S.Container>
}

export default CardNews
