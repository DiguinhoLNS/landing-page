import { TypewriterClass } from "typewriter-effect"

function textName(name: string, typewriter: TypewriterClass){
    typewriter.typeString(name)
    .pauseFor(2000)
    .deleteAll()
}

export default function typeWriterText(typewriter: TypewriterClass){
    typewriter.start()
    
    textName('Rodrigo', typewriter)
    textName('Diguinho', typewriter)
    textName('Digo', typewriter)
    textName('Digão', typewriter)
}