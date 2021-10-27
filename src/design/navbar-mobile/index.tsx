import React from 'react'

import * as S from './styles'
import { BiMenu, BiX } from 'react-icons/bi'
import { menuOptions } from '../../data/menu-options'
import Logo from '../../assets/logo-white.svg'


const NavbarMobile: React.FC = () => {
  const [hamburgerX, setHamburgerX] = React.useState(false)

  return (
    <S.GeneralContainer>
      <label htmlFor="check-menu">
        {hamburgerX ? <BiX color="#fff" size="20px" /> : <BiMenu size="20px" />}
      </label>
      <input
        type="checkbox"
        id="check-menu"
        onChange={(e: any) => setHamburgerX(e.target.checked)}
      />
      <S.Container>
        <S.HeaderOfMenu>
       <Logo />
        </S.HeaderOfMenu>
        <ul>
          {menuOptions.map((option, index) => (
            <S.Option key={index} href={option.path}>
              {option.label}
            </S.Option>
          ))}
        </ul>
      </S.Container>
    </S.GeneralContainer>
  )
}

export default NavbarMobile
