import React, {useState} from 'react'

import { Sidebar } from '@components/Sidebar'
import { BurgerButtonIcon } from '@components/BurgerButtonIcon'
import { CloseIcon } from '@components/CloseIcon'
import '@styles/components/Layout.scss'

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const Icon = open ? CloseIcon : BurgerButtonIcon

  return (
    <>
      <button
        className="button"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Icon />
      </button>
      <div className="Layout">
        <Sidebar isOpen={open} />
        {children}
      </div>
    </>
  )
}
