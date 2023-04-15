export default function getScrolled(setScroll: React.Dispatch<React.SetStateAction<number>>){
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = scrollPx / winHeightPx * 100

    setScroll(scrolled)
}