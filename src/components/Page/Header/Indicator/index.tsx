import React, { useEffect, useState } from 'react'
import createClassName from '@utils/createClassName'
import getScrolled from '@utils/getScrolled'

const HeaderIndicator: React.FC = () => {

    const [scroll, setScroll] = useState(0)

    const indicatorClasses = createClassName('', [scroll === 100 && 'full', scroll > 0 && 'scrolled'])

    useEffect(() => {
        document.addEventListener('scroll', () => getScrolled(setScroll))
        return () => {document.removeEventListener('scroll', () => {})}   
    }, [])

    return(

        <div id = "headerIndicator" className = {indicatorClasses}>
            <div id = "headerIndicatorBarMask" style = {{width: `${100 - scroll}%`}} />
        </div>

    )

}

export default HeaderIndicator