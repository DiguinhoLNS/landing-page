import { TypewriterClass } from "typewriter-effect"

export default function typeWriterText(typewriter: TypewriterClass) {
    typewriter.typeString('Olá eu sou o Rodrigo')
    .pauseFor(2000)
    .deleteAll()
    typewriter.typeString('Desenvolvedor Front-end Pleno')
    .pauseFor(1000)
    typewriter.typeString(', e aqui está um resumo do meu trabalho')
    .pauseFor(3000)
    .deleteAll()
    .start();
}