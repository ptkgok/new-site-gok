import React from 'react'
import * as S from './styles'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.TopOfFooter>
        <img
          src="https://res.cloudinary.com/code-comunity/image/upload/v1632790174/site-gok/logo_yfofsq.svg"
          alt="LOGO-GOK"
          loading="lazy"
        />
        <div>
          <ul>
            <li>Quem somos</li>
            <li>Go News</li>
            <li>Nossas Soluções</li>
            <li>Fale Conosco</li>
            <li>Blog</li>
            <li>Seja um Goker</li>
          </ul>
        </div>
      </S.TopOfFooter>
      <S.SocialMedia>
        <div>
          <h3>Redes Sociais</h3>
        </div>
        <div>
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </S.SocialMedia>
      <S.NewsLetter>
        <section>
          <h3>GO News</h3>
          <p>Assine nossas news e saiba tudo de inovação e tecnologia</p>
        </section>
        <div>
          <input placeholder="Digite seu E-mail" type="text" />
          <button>Enviar</button>
        </div>
      </S.NewsLetter>
      <S.EndOfFooter>
        <span>Criado e desenvolvido pela GOK</span>
      </S.EndOfFooter>
    </S.Container>
  )
}

export default Footer
