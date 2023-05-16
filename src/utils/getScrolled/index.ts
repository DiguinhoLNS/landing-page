export default function getScrolled(setScroll: React.Dispatch<React.SetStateAction<number>>){
    const wrapper = document.querySelector('#wrapper')!

    const scrollPx = wrapper.scrollTop
    const winHeightPx = wrapper.scrollHeight - document.documentElement.clientHeight
    const scrolled = scrollPx / winHeightPx * 100

    setScroll(scrolled)
}