import { useMediaQuery } from '../../hooks/useMediaQuery'
import React, { useEffect, useRef, useState } from 'react'
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import Headlines from '../Headlines/Headlines'
import { JourneyItem } from './JourneyTypes'
import { SanityImage } from '../SanityImage/SanityImage'
import JourneyCopy from './JourneyCopy'

const JourneyItems = ({ copy, image, headline, description }: JourneyItem) => {
    const mediaQuery = useMediaQuery()
    const ref = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'center start'],
    })
    const [imageHeight, setImageHeight] = useState<number>(0)
    const [dynamicImageValues, setDynamicImageValues] = useState<
        Record<string, any>
    >({
        width: '33.4%',
        padding: '3rem',
        offsetTop: ['21vh', '42vh'],
        offsetY: '60px',
    })
    const [dynamicTitleValues, setDynamicTitleValues] = useState<
        Record<string, any>
    >({
        offsetTop: ['10vh', '30vh'],
        marginBottom: '0',
    })

    useEffect(() => {
        if (mediaQuery.xs || mediaQuery.sm) {
            setImageHeight(0)
            setDynamicImageValues({
                width: '100%',
                padding: '0rem',
                offsetTop: ['0', '0'],
                offsetY: '50px',
            })
            setDynamicTitleValues({
                offsetTop: ['0', '0'],
                marginBottom: '0',
            })
        } else {
            setDynamicImageValues({
                width: '33.4%',
                padding: '3rem',
                offsetTop: ['21vh', '42vh'],
                offsetY: '0',
            })
            setDynamicTitleValues({
                offsetTop: ['10vh', '30vh'],
                marginBottom: `${imageHeight}px`,
            })
        }
    }, [mediaQuery.xs, mediaQuery.sm, imageHeight])

    //TITLE ANIMATIONS

    const titleOffsetTop = useTransform(
        scrollYProgress,
        [0.1, 0.4],
        [dynamicTitleValues.offsetTop[0], dynamicTitleValues.offsetTop[1]]
    )

    const titleSpacing = useTransform(
        scrollYProgress,
        [0.3, 0.4],
        ['0px', dynamicTitleValues.marginBottom]
    )

    //IMAGE ANIMATIONS

    const imageWidth = useTransform(
        scrollYProgress,
        [0.1, 0.4],
        ['100%', dynamicImageValues.width]
    )

    const imageOffsetTop = useTransform(
        scrollYProgress,
        [0.1, 0.4],
        [dynamicImageValues.offsetTop[0], dynamicImageValues.offsetTop[1]]
    )

    const imageMobileOffset = useTransform(
        scrollYProgress,
        [0, 0.8],
        [dynamicImageValues.offsetY, '0px']
    )

    useMotionValueEvent(scrollYProgress, 'change', () => {
        if (imageRef.current && !(mediaQuery.xs || mediaQuery.sm)) {
            setDynamicTitleValues({
                ...dynamicTitleValues,
                marginBottom:
                    imageRef.current?.getBoundingClientRect().height + 'px',
            })
        }
    })

    return (
        <GridColumnsLayout
            ref={ref}
            additionalStyles="relative h-auto xs:min-h-screen sm:min-h-screen min-h-[170vh] sm:px-6 sm:py-8 md:py-[72px] lg:py-40 xl:py-40 xs:px-6 xs:py-8 ul:py-40"
        >
            <motion.div
                style={{
                    gridColumn: '2 / 2',
                    marginBottom: titleSpacing.get(),
                    top: titleOffsetTop.get(),
                }}
                className="sticky z-20 self-start px-4 sm:!top-[var(--headerHeightMobile)] sm:-mx-6 sm:bg-primary-white sm:px-6 sm:transition-all sm:delay-100 sm:duration-[600ms] sm:ease-in-out xs:!top-[var(--headerHeightMobile)] xs:-mx-6 xs:bg-primary-white xs:px-6 xs:transition-all xs:delay-100 xs:duration-[600ms] xs:ease-in-out"
            >
                <Headlines
                    element="h3"
                    text={headline}
                    color="text-primary-soft-black"
                    className="mb-8 sm:mb-0 sm:py-4 xs:mb-0 xs:py-4"
                />
            </motion.div>

            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="mx-auto h-fit w-9/12 pb-12 sm:w-full sm:py-4 xs:w-full xs:py-4"
            >
                <Headlines
                    element="h4"
                    text={description}
                    color="text-primary-soft-black"
                />
            </div>
            <motion.div
                style={{
                    gridColumn: '2 / 5',
                    width: imageWidth,
                    y: imageMobileOffset,
                    top: imageOffsetTop,
                }}
                className="sticky z-10 self-start px-4 sm:relative sm:px-0 xs:relative xs:px-0"
            >
                {image && (
                    <div ref={imageRef}>
                        <SanityImage
                            className="h-full w-full object-cover"
                            image={image}
                            alt="journey-img"
                        />
                    </div>
                )}
            </motion.div>
            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="mx-auto h-auto w-9/12 sm:w-full sm:pt-20 xs:w-full xs:pt-20"
            >
                {copy.map((item, index) => {
                    return (
                        <JourneyCopy
                            key={index}
                            text={item}
                            index={index}
                            copyLength={copy.length}
                        />
                    )
                })}
            </div>
        </GridColumnsLayout>
    )
}

export default JourneyItems
