import { useLayoutEffect, useState } from "react"

export default function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false)
    
    const handleScroll = () => {
        const { scrollTop } = document.querySelector('#wrapper')!
        setStick(scrollTop > offset)
    }
    
    useLayoutEffect(() => {
        const wrapper = document.querySelector('#wrapper')!

        wrapper.addEventListener('scroll', handleScroll)

        return(() => {
            wrapper.removeEventListener('scroll', handleScroll)
        })
    }, [])
    
    return stick
}