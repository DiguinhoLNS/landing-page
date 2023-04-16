import React from 'react'
import Icon from '@mdi/react'
import createClassName from '@utils/createClassName'
import { BoxSocialProps } from './types'

const BoxSocial: React.FC <BoxSocialProps> = ({ type, icon, link }) => {

    const boxSocialClasses = createClassName('boxSocial')

    return(

        <div className = {boxSocialClasses} style = {{backgroundColor: `var(--color-brand-${type})`}}>
            <a href = {link} target = "_blank" rel = "noopener noreferrer">
                <Icon path = {icon} size = "64px" />
            </a>
        </div>
        
    )

}

export default BoxSocial