import React from 'react'

import '@styles/components/Footer.scss'

export const Footer = () => {
  return (
    <footer className="Footer">
      <span>ePayco © 2011 - 2019 todos los derechos reservados.</span>
      <div>
        <figure className="Footer__logoWrapper Footer__logoWrapper--davivienda">
          <img
            className="Footer__logo"
            src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1616471439/epayco/davivienda-logo_smjybc.svg"
            alt="Logotipo de Davivienda"
            width="214"
          />
        </figure>
        <figure className="Footer__logoWrapper Footer__logoWrapper--epayco">
          <img
            className="Footer__logo"
            src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1616471434/epayco/epayco-logo-monocromatico_beexkj.svg"
            alt="Logotipo de ePayco"
            width="76"
          />
        </figure>
      </div>
    </footer>
  )
}
