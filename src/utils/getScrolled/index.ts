export default function getScrolled(setScroll: React.Dispatch<React.SetStateAction<number>>){
    const main = document.querySelector('main')!

    const scrollPx = main.scrollTop
    const winHeightPx = main.scrollHeight - document.documentElement.clientHeight
    const scrolled = scrollPx / winHeightPx * 100

    setScroll(scrolled)
}