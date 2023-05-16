import { useEffect, useState } from "react"

export default function useScrollDirection(){

    const [scrollDirection, setScrollDirection] = useState<string>('top')

    useEffect(() => {
        const wrapper = document.querySelector('#wrapper')!
        let previusScroll = wrapper.scrollTop

        const updateScrollDirection = () => {
            const scrollPx = wrapper.scrollTop
            const scrollDown = scrollPx > previusScroll
            const scrollUp = scrollPx < previusScroll
            const scrollTop = scrollPx === 0
            const scrollBottom = scrollPx + wrapper.clientHeight === wrapper.scrollHeight

            
            if(scrollTop){
                setScrollDirection('top')
            }else if(scrollBottom){
                setScrollDirection('bottom')
            }else if(scrollDown){
                setScrollDirection('down')
            }else if(scrollUp){
                setScrollDirection('up')
            }

            previusScroll = scrollPx
        }
        
        wrapper.addEventListener("scroll", updateScrollDirection)

        return () => {
            wrapper.removeEventListener("scroll", updateScrollDirection)
        }
      }, [scrollDirection])
    
      return scrollDirection
    
}