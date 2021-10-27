import React from 'react'
import { CardsWithImages } from '../data/cards-with-images.data'
import CardWithImages from '../design/cards-with-images'

const Home: React.FC = () => {
  return (
    <div style={{ marginTop: 100, display: 'flex', gap: 10, padding: 10 }}>
      { CardsWithImages.map(card => (
      <CardWithImages key={card.id} tech={card.tech} title={card.title} subtitle={card.subtitle} description={card.description} image={card.image} />
      )) }
    </div>
  )
}

export default Home
