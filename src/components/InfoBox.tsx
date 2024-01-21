import { type FC, type ReactNode } from 'react'

type InfoBoxProps = {
    mode : 'hint' | 'warning',
    severity? : 'lov' | 'medium' | 'high'  //optional 
    children : ReactNode
}

const InfoBox : FC<InfoBoxProps> = ({mode,severity,children}) => {
    if(mode === 'hint') {
        return (
            <aside className='infobox infobox-hint'>
                <h2>Hint</h2>
                <p>{children}</p>
            </aside>
        )
    }
  return (
    <aside className={`infobox infobox-warning warning--${severity}`} >
    <h2>Warning</h2>
    <p>{children}</p>
</aside>
  )
}

export default InfoBox