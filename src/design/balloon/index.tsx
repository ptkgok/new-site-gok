import React from 'react'
import { BalloonsData } from '../../data/balloons.data'
import * as Balloons from './styles'

const Baloon: React.FC = () => {
  return (
    <Balloons.Container>
      {BalloonsData.map((balloon,key) => (
        <Balloons.Item key={key}>
          <Balloons.Content side={balloon.side}>
            <h2>{balloon.title}</h2>
            <p>{balloon.description}</p>
          </Balloons.Content>
        </Balloons.Item>
      ))}
    </Balloons.Container>
  )
}

export default Baloon
