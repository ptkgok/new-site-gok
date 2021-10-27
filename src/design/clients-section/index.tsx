import React from 'react';
import { Clients } from '../../data/clients.data';

import * as S from './styles';

const ClientSections: React.FC = () => {
  return (
    <S.Container>
      <h3>Clientes</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      <S.CarouselContainer>
        { Clients.map( client => (
        <S.CardWithClient key={client.id}>
          <img src={client.image} alt="" />
        </S.CardWithClient>
        )) }
      </S.CarouselContainer>
    </S.Container>
  )
}

export default ClientSections;