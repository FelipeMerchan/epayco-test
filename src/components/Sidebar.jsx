import React from 'react'
import { Link } from 'react-router-dom'

import { HouseOutline } from '@components/HouseOutline'
import { CustomersOutline } from '@components/CustomersOutline'
import '@styles/components/Sidebar.scss'

export const Sidebar = ({ isOpen }) => {
  return (
    <div className={`Sidebar ${isOpen ? 'is-open' : ''}`}>
      <figure className="Sidebar__logoWrapper">
        <img className="Sidebar__logo" src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1616471429/epayco/epayco-logo_ucjitb.svg" width="156" alt="Logo de ePayco" />
      </figure>
      <span className="Sidebar__user">ALEXANDER CEBALLOS</span>
      <nav className="Sidebar__menu">
        <ul>
          <li>
            <Link to="/" exact="true">
              <HouseOutline /><span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/clientes" exact="true">
              <CustomersOutline /><span>Clientes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
