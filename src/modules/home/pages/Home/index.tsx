import React from 'react'
import Typewriter from 'typewriter-effect'
import './styles.scss'
import Section from '@components/Page/Section'
import typeWriterText from './scripts/typewriter'

const Home: React.FC = () => {

    return(

        <>
            <Section name = "welcome" direction = "row" align = "between">
                <div id = "welcomeMessage">
                    <div className = "memojiContainer">
                        espaço para avatar
                    </div>
                    <div className = "textContainer">
                        <h1>
                            <Typewriter
                                options = {{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit = {typeWriterText}
                            />
                        </h1>
                    </div>
                </div>
            </Section>
            <Section name = "study">
                
            </Section>
            <Section name = "work">
                
            </Section>
            <Section name = "projects">
                
            </Section>
            <Section name = "social">
                
            </Section>
        </>

    )

}

export default Home