// icon:slash-square | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react"

function SlashLine(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#a)" clipRule="evenodd">
        <path d="M18 4.1H6A1.9 1.9 0 0 0 4.1 6v12c0 1.05.85 1.9 1.9 1.9h12a1.9 1.9 0 0 0 1.9-1.9V6A1.9 1.9 0 0 0 18 4.1zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z" />
        <path d="m6.68 17.8 8.108-11.58h2.532L9.21 17.8H6.68z" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width={20} height={20} x={2} y={2} rx={1} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SlashLine
