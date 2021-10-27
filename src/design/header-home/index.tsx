import React from 'react'
import * as S from './styles'

const HeaderHome: React.FC = () => {
  return (
    <S.Container>
      <S.Texts>
        <div></div>
        <h1>One Step Ahead</h1>
        <p>
          Somos uma empresa de inovação digital pronta para otimizar seus
          negócios e mantê-los um passo à frente
        </p>
      </S.Texts>
      <S.Image>
        <img
          src="https://res.cloudinary.com/code-comunity/image/upload/v1632229606/site-gok/img_j8ciup.svg"
          alt="Logo"
        />
      </S.Image>
    </S.Container>
  )
}

export default HeaderHome
