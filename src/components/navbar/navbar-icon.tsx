type NavbarMobileModeIconProps = React.SVGProps<SVGSVGElement> & {
  isOpen: boolean
}

export const NavbarMobileModeIcon = ({
  isOpen,
  ...props
}: NavbarMobileModeIconProps) => {
  if (isOpen) {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width={20} height={21} {...props}>
        <g fill='#D0D6F9' fillRule='evenodd'>
          <path d='m2.575.954 16.97 16.97-2.12 2.122L.455 3.076z' />
          <path d='M.454 17.925 17.424.955l2.122 2.12-16.97 16.97z' />
        </g>
      </svg>
    )
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={21} {...props}>
      <path
        fill='#D0D6F9'
        fillRule='evenodd'
        d='M0 0h24v3H0zm0 9h24v3H0zm0 9h24v3H0z'
      />
    </svg>
  )
}
