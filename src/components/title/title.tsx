import style from './title.module.css'

type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export const TitleRoot = ({ ...props }: TitleProps) => {
  return <h2 className={style.title} {...props} />
}

type TitleCounterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export const TitleCounter = ({ ...props }: TitleCounterProps) => {
  return <span className={style.title_counter} {...props} />
}
