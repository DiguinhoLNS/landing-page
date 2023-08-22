import React from 'react'
import Icon from '@mdi/react'
import { HeaderOptionProps } from '../types'

const HeaderOption: React.FC <HeaderOptionProps> = ({ icon, label, onClick }) => {

    return(
   
        <div className = "headerOption" onClick = {onClick}>
            <Icon path = {icon} size = "24px" />
            {label && <span className = "headerOptionLabel">{label}</span>}
        </div>

    )

}

export default HeaderOption