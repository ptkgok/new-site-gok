import React from 'react';
import { CardsWithImagesCases } from '../../../data/cards-with-images.data';
import CardWithImages from '../../cards-with-images';
import * as S from './styles'


const SolutionsCases: React.FC = () => {
  return (
    <S.Container>
        <S.Title>Cases</S.Title>
        <S.Description>
          Ao longo da nossa trajetória, trabalhamos em parceria para a inovação das mais diversas indústrias setoriais.
        </S.Description>
        <S.CardTitleAndDescription>
          <div>
          <img src="https://res.cloudinary.com/code-comunity/image/upload/v1633483584/site-gok/missaocovid_qnhdqy.png" />
          </div>
          <div>
            <span>Missão Covid</span>
            <h3>Plataforma de telemedicina criada em 48H para ajudar pessoas durante a pandemia</h3>
            <p>Mudamos a forma como as pessoas interagem com as lojas através da tecnologia, o aplicativo Pernambucanas Mudamos a forma como as pessoas interagem com as lojas através da tecnologia, o com as loj aplicativo Pernambucanas.</p>
            <img style={{ width: 40 }} src="https://res.cloudinary.com/code-comunity/image/upload/v1632454319/site-gok/btn_os31x2.svg" alt="" />
          </div>
        </S.CardTitleAndDescription>
        <S.CardsWithImages>
          {CardsWithImagesCases.map(card => (
            <CardWithImages key={card.id} tech={card.tech} title={card.title} subtitle={card.subtitle} description={card.description} image={card.image} />
          ))}
        </S.CardsWithImages>
      </S.Container>
  )
}

export default SolutionsCases;