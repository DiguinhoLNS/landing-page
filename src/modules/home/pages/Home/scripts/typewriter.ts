import { TypewriterClass } from "typewriter-effect"

export default function typeWriterText(typewriter: TypewriterClass){
    typewriter.typeString('Olá eu sou o Rodrigo')
    .pauseFor(2000)
    .deleteAll()
    typewriter.typeString('Desenvolvedor Front-end Pleno')
    .pauseFor(1000)
    typewriter.typeString(', e este é o meu site!')
    .pauseFor(3000)
    .deleteAll()
    .start()
}