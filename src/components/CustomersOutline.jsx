import * as React from "react"

export const CustomersOutline = (props) => {
  return (
    <svg
      width={25}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#prefix__pattern0)" d="M.933.409h23.9v22.782H.933z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0"
            transform="matrix(.01563 0 0 .0164 0 -.025)"
          />
        </pattern>
        <image
          id="prefix__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}
