import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { mdiBrightness4, mdiBrightness5 } from '@mdi/js'
import { ROUTE_INDEX } from '@config/.'
import useScrollDirection from '@hooks/useScrollDirection'
import { toggleTheme } from '@modules/theme/reducers/themeReducer'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import createClassName from '@utils/createClassName'
import './styles.scss'
import typeWriterText from './scripts/typewriter'
import HeaderOption from './Option'
import HeaderContent from './Content'
import HeaderIndicator from './Indicator'

const Header: React.FC = () => {

    const dispatch = useAppDispatch()
    const { theme } = useAppSelector(s => s.theme)

    const test = useScrollDirection()
    const headerClasses = createClassName(['header', test])

    return(

        <header className = {headerClasses}>
            <ul id = "headerContainer">
                <HeaderContent name = "logo">
                    <Link to = {ROUTE_INDEX}>
                        <Typewriter
                            options = {{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit = {typeWriterText}
                        />
                    </Link>
                </HeaderContent>
                <HeaderContent name = "blank" />
                <HeaderContent name = "options">
                    <HeaderOption
                        icon = {theme === 'dark-mode' ? mdiBrightness5 : mdiBrightness4}
                        onClick = {() => dispatch(toggleTheme())}
                    />
                </HeaderContent>
            </ul>
            <HeaderIndicator />
        </header>

    )

}

export default Header