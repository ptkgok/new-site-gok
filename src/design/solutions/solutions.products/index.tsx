import React from 'react';
import { CardsWithImages } from '../../../data/cards-with-images.data';
import CardWithImages from '../../cards-with-images';

import * as S from './styles'

const SolutionsProducts: React.FC = () => {
  return (
    <S.Container>
    <S.Title>Produtos</S.Title>
    <S.Description>
      Estamos revolucionando o mercado através de novas tecnologias e produtos, nosso time continua expandido e inovando e dessa expansão nascem novos produtos e startups independentes da Gok com própositos únicos e diferenciados.
    </S.Description>
    <S.CardTitleAndDescription>
      <div>
      <img src="https://res.cloudinary.com/code-comunity/image/upload/v1633478730/site-gok/QAUNITY_xxpbjp.png" />
      </div>
      <div>
        <span>QA UNITY</span>
        <h3>QA Business Unity nasce para solucionar problema
          de Qualidade e testes em produtos digitais</h3>
        <p>Mudamos a forma como as pessoas interagem com as lojas através da tecnologia, o aplicativo Pernambucanas Mudamos a forma como as pessoas interagem com as lojas através da tecnologia, o com as loj aplicativo Pernambucanas </p>
        <img style={{ width: 40 }} src="https://res.cloudinary.com/code-comunity/image/upload/v1632454319/site-gok/btn_os31x2.svg" alt="" />
      </div>
    </S.CardTitleAndDescription>
    <S.CardsWithImages>
      {CardsWithImages.map(card => (
        <CardWithImages key={card.id} tech={card.tech} title={card.title} subtitle={card.subtitle} description={card.description} image={card.image} />
      ))}
    </S.CardsWithImages>
  </S.Container>
  )
}

export default SolutionsProducts;