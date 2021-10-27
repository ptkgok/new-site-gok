import React from 'react'
import ContentGoNews from '../design/go-news/content'
import Header from '../design/header'
import LayoutBase from '../design/layout/layout-base'

const Sandbox: React.FC = () => {
  return (
    <LayoutBase
      header={
        <Header
          image="https://res.cloudinary.com/code-comunity/image/upload/v1633436182/site-gok/Imagem_BG_st7viu.png"
          title="GONEWS"
          description={<p>Acompanhe nossas novidades e insights do mercado tecnológico. Inovações,
          projetos e metodologias. <strong>Fique por dentro!</strong> </p>}
        />
      }
      content={<ContentGoNews />}
    />
  )
}

export default Sandbox
