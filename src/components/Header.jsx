import React from 'react'

import '@styles/components/Header.scss'

export const Header = () => {

  return (
    <header className="Header">
      <figure className="Header__logoWrapper">
        <img className="Header__logo" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1616471434/epayco/epayco-logo-monocromatico_beexkj.svg" width="120" alt="Logo de ePayco" />
      </figure>
    </header>
  )
}
