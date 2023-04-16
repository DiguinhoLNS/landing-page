import React from 'react'
import Section from '@components/Page/Section'
import socialBoxes from '@constants/socialBoxes'
import BoxSocial from '../../BoxSocial'

const SectionHomeSocial: React.FC = () => {

    return(

        <Section name = "social" padding = {false}>
            <div className = "socialBoxGroup">
                {socialBoxes.map((item, index) => <BoxSocial key = {index} {...item} />)}
            </div>
        </Section>

    )

}

export default SectionHomeSocial