import React from 'react'
import { cards } from '../../data/cards'

import CardNews from '../card-news'

import * as S from './styles'

const HorizontalSlider: React.FC = () => {
  return (
    <S.Container>
      <S.Left>
        <h1>NEWS</h1>
        <span>últimos destaques</span>
      </S.Left>
      <S.Right>
        {cards.map(card => (
          <CardNews key={card.id} url={card.url} />
        ))}
      </S.Right>
    </S.Container>
  )
}

export default HorizontalSlider
