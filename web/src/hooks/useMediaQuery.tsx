import { useEffect, useState } from 'react'

export const useMediaQuery = () => {
    const [isMediumSmallVW, setIsMediumSmallVW] = useState<boolean>(false)
    const [isExtraSmallVW, setIsExtraSmallVW] = useState<boolean>(false)

    useEffect(() => {
        const mqSMD = window.matchMedia(
            `(min-width: 600px) and (max-width: 1439px)`
        )
        const mqXS = window.matchMedia(`(max-width: 599px)`)

        const handlerSMD = (mq: { matches: boolean }) => {
            setIsMediumSmallVW(mq.matches)
        }
        const handlerXS = (mq: { matches: boolean }) => {
            setIsExtraSmallVW(mq.matches)
        }

        setIsMediumSmallVW(mqSMD.matches)
        setIsExtraSmallVW(mqXS.matches)

        mqSMD.addEventListener('change', handlerSMD)
        mqXS.addEventListener('change', handlerXS)

        return () => {
            mqSMD.removeEventListener('change', handlerSMD)
            mqXS.removeEventListener('change', handlerXS)
        }
    }, [])

    return {
        smd: isMediumSmallVW,
        xs: isExtraSmallVW,
    }
}
