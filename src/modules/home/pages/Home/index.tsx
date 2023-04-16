import React from 'react'
import SectionHomeWelcome from './components/Section/Welcome'
import SectionHomeAbout from './components/Section/About'
import SectionHomeWork from './components/Section/Work'
import SectionHomeProjects from './components/Section/Projects'
import SectionHomeSetup from './components/Section/Setup'
import SectionHomeSocial from './components/Section/Social'
import './styles.scss'

const Home: React.FC = () => {

    return(

        <>
            <SectionHomeWelcome />
            <SectionHomeAbout />
            <SectionHomeWork />
            <SectionHomeProjects />
            <SectionHomeSetup />
            <SectionHomeSocial />
        </>

    )

}

export default Home