import React from 'react'

import * as S from './styles'
import NavbarMobile from '../navbar-mobile'
import Logo from '../../assets/Logo.svg'
import { menuOptions } from '../../data/menu-options'

const Navbar: React.FC = () => {
  return (
    <S.Container>
        <Logo />
      <S.MenuButtonAndItemsSide>
        <S.Options>
          {menuOptions.map((option, key) => (
            <S.Option key={key} href={option.path}>
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
