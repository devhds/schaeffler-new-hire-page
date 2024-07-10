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
import JourneyCopy from './JourneyCopy'
import Image from 'next/image'

const JourneyItems = ({ copy, headline, description, index }: JourneyItem) => {
    const mediaQuery = useMediaQuery()
    const ref = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLDivElement | null>(null)
    const descriptionRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'center start'],
    })
    const [imageHeight, setImageHeight] = useState<number>(0)
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [dynamicImageValues, setDynamicImageValues] = useState<
        Record<string, any>
    >({
        width: '33.4%',
        padding: '3rem',
        offsetTop: ['22%', '42%'],
        offsetY: '-20%',
    })
    const [dynamicTitleValues, setDynamicTitleValues] = useState<
        Record<string, any>
    >({
        offsetTop: ['22%', '42%'],
    })

    useEffect(() => {
        if (mediaQuery.xs || mediaQuery.sm) {
            setDynamicImageValues({
                width: '100%',
                padding: '0rem',
                offsetTop: ['0', '0'],
                offsetY: ['50px', '0px'],
            })
            setDynamicTitleValues({
                offsetTop: ['0', '0'],
            })
            setImageHeight(0)
        } else if (
            imageHeight === 0 &&
            imageRef.current &&
            (!mediaQuery.xs || !mediaQuery.sm)
        ) {
            setImageHeight(
                imageRef.current?.getBoundingClientRect().height * 0.334
            )
        } else {
            setDynamicImageValues({
                width: '33.4%',
                padding: '3rem',
                offsetTop: ['22%', '42%'],
                offsetY: ['-20px', '0px'],
            })
            setDynamicTitleValues({
                offsetTop: ['22%', '42%'],
            })
        }
    }, [mediaQuery.xs, mediaQuery.sm, imageHeight])

    //TITLE ANIMATIONS

    const titleOffsetTop = useTransform(
        scrollYProgress,
        [0.2, 0.7],
        [dynamicTitleValues.offsetTop[0], dynamicTitleValues.offsetTop[1]]
    )

    //IMAGE ANIMATIONS

    const imageWidth = useTransform(
        scrollYProgress,
        [0, 0.4],
        ['100%', dynamicImageValues.width]
    )

    const imageOffsetTop = useTransform(
        scrollYProgress,
        [0, 0.4],
        [dynamicImageValues.offsetTop[0], dynamicImageValues.offsetTop[1]]
    )

    const imageOffset = useTransform(
        scrollYProgress,
        [0, 0.8],
        [dynamicImageValues.offsetY[0], dynamicImageValues.offsetY[1]]
    )

    const titleSpacing = useTransform(
        () =>
            `calc(${titleOffsetTop.get()} - ${textRef.current?.getBoundingClientRect().height}px)`
    )

    useMotionValueEvent(scrollYProgress, 'change', latestValue => {
        setIsSticky(latestValue > 0.06)
    })

    return (
        <GridColumnsLayout
            ref={ref}
            additionalStyles="relative h-auto xs:min-h-screen sm:min-h-screen min-h-[200vh] sm:px-6 sm:py-8 md:py-[72px] lg:py-40 xl:py-40 xs:px-6 xs:py-8 ul:py-40"
        >
            <motion.div
                style={{
                    gridColumn: '2 / 2',
                    marginBottom: imageHeight + 'px',
                    top: titleSpacing,
                }}
                ref={textRef}
                className={`sticky ${isSticky ? 'sm:bg-primary-white xs:bg-primary-white' : ''} z-20 self-start px-4 sm:!top-[var(--headerHeightMobile)] sm:-mx-6 sm:bg-primary-white sm:px-6 sm:transition-all sm:delay-100 sm:duration-[600ms] sm:ease-in-out xs:!top-[var(--headerHeightMobile)] xs:-mx-6 xs:px-6 xs:transition-all xs:delay-100 xs:duration-[600ms] xs:ease-in-out`}
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
                ref={descriptionRef}
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
                    y: imageOffset,
                    top: imageOffsetTop,
                }}
                className="sticky z-30 aspect-video self-start px-4 sm:relative sm:px-0 xs:relative xs:px-0"
            >
                <Image
                    ref={imageRef}
                    src={
                        index === 0
                            ? '/images/journeyImage1.jpg'
                            : index === 1
                              ? '/images/journeyImage2.jpg'
                              : '/images/journeyImage3.jpg'
                    }
                    alt="journey-img"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="h-full w-full object-cover"
                />
            </motion.div>
            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="mx-auto h-auto w-9/12 sm:w-full sm:pt-20 xs:w-full xs:pt-20"
            >
                {copy.map((item, index) => {
                    return <JourneyCopy key={index} text={item} />
                })}
            </div>
        </GridColumnsLayout>
    )
}

export default JourneyItems
