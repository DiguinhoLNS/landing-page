import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {

    return(

        <footer>
            <ul id = "footerContainer">
                <li className = "footerContent copyright">
                    <span>{`diguinholns© ${new Date().getFullYear()}, todos os direitos reservados.`}</span>
                </li>
                <li className = "footerContent links">
                    <Link to = "">Link</Link>
                    <Link to = "">Link</Link>
                    <Link to = "">Link</Link>
                </li>
            </ul>
        </footer>

    )

}

export default Footer