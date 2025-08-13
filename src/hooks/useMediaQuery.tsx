import { useEffect, useState } from 'react'

interface useMediaQueryTypes {
    xs: boolean
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean
}

export const useMediaQuery = () => {
    const [isExtraSmallVW, setIsExtraSmallVW] = useState<boolean>(false)
    const [isSmallVW, setIsSmallVW] = useState<boolean>(false)
    const [isMediumVW, setIsMediumVW] = useState<boolean>(false)
    const [isLargeVW, setIsLargeVW] = useState<boolean>(false)
    const [isExtraLargeVW, setExtraIsLargeVW] = useState<boolean>(false)

    useEffect(() => {
        const mqXS = window.matchMedia(`(max-width: 599px)`)
        const mqSM = window.matchMedia(
            `(min-width: 600px) and (max-width: 904px)`
        )
        const mqMD = window.matchMedia(
            `(min-width: 905px) and (max-width: 1239x)`
        )
        const mqLG = window.matchMedia(
            `(min-width: 1240px) and (max-width: 1439x)`
        )
        const mqXL = window.matchMedia(
            `(min-width: 1440px) and (max-width: 2879x)`
        )

        const handlerXS = (mq: { matches: boolean }) => {
            setIsExtraSmallVW(mq.matches)
        }
        const handlerSM = (mq: { matches: boolean }) => {
            setIsSmallVW(mq.matches)
        }
        const handlerMD = (mq: { matches: boolean }) => {
            setIsMediumVW(mq.matches)
        }
        const handlerLG = (mq: { matches: boolean }) => {
            setIsLargeVW(mq.matches)
        }
        const handlerXL = (mq: { matches: boolean }) => {
            setExtraIsLargeVW(mq.matches)
        }

        setIsExtraSmallVW(mqXS.matches)
        setIsSmallVW(mqSM.matches)
        setIsMediumVW(mqMD.matches)
        setIsLargeVW(mqLG.matches)
        setExtraIsLargeVW(mqXL.matches)

        mqXS.addEventListener('change', handlerXS)
        mqSM.addEventListener('change', handlerSM)
        mqMD.addEventListener('change', handlerMD)
        mqLG.addEventListener('change', handlerLG)
        mqXL.addEventListener('change', handlerXL)

        return () => {
            mqXS.removeEventListener('change', handlerXS)
            mqSM.removeEventListener('change', handlerSM)
            mqMD.removeEventListener('change', handlerMD)
            mqLG.removeEventListener('change', handlerLG)
            mqXL.removeEventListener('change', handlerXL)
        }
    }, [])

    const allQueries: useMediaQueryTypes = {
        xs: isExtraSmallVW,
        sm: isSmallVW,
        md: isMediumVW,
        lg: isLargeVW,
        xl: isExtraLargeVW,
    }

    return allQueries
}
