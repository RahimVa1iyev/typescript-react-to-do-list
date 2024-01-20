import { type PropsWithChildren, type FC } from "react"

type ImageAttribute = {
    src : string ;
    alt : string
}
type HeaderProps = PropsWithChildren<{image : ImageAttribute}>



const Header : FC<HeaderProps> = ({image,children}) => {
  return (
    <header>
        <img  {...image} />
        {children}
    </header>
  )
}

export default Header