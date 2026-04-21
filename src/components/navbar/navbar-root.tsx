import style from './navbar.module.css'

type navbarRootProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { customClass: string }
export const NavbarRoot = ({ customClass, ...props }: navbarRootProps) => {
  return (
    <nav
      {...props}
      className={`${style.navbar_container} ${style[customClass]}`}
    />
  )
}
