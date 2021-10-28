import React from 'react'

import * as S from './styles'
import NavbarMobile from '../navbar-mobile'
import Logo from '../../assets/Logo.svg'
import { menuOptions } from '../../data/menu-options'
import { useRouter } from 'next/dist/client/router'
import theme from '../../styles/theme'

const Navbar: React.FC = () => {

  const Route = useRouter()

  return (
    <S.Container>
      <Logo />
      <S.MenuButtonAndItemsSide>
        <S.Options>
          {menuOptions.map((option, key) => (
            <S.Option style={{ borderBottom: Route.pathname === option.path && `${theme.colors.primary} solid` }} key={key} href={option.path}>
              {option.label}
            </S.Option>
          ))}
        </S.Options>
        <NavbarMobile />
      </S.MenuButtonAndItemsSide>
    </S.Container>
  )
}

export default Navbar
