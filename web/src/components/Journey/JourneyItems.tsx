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
import Image from 'next/image'
import JourneyCopy from './JourneyCopy'
import { JourneyItem } from './JourneyTypes'

const JourneyItems = ({ copy, image, headline, description }: JourneyItem) => {
    const mediaQuery = useMediaQuery()
    const ref = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'center start'],
    })
    const [imageHeight, setImageHeight] = useState<number>(0)
    const [dynamicImageValues, setDynamicImageValues] = useState<
        Record<string, any>
    >({
        width: '33.4%',
        padding: '3rem',
        offset: '0px',
    })
    const [dynamicTitleSpacing, setDynamicTitleSpacing] = useState<string>('')

    useEffect(() => {
        if (mediaQuery.xs || mediaQuery.sm) {
            setImageHeight(0)
            setDynamicImageValues({
                ...dynamicImageValues,
                width: '100%',
                padding: '0rem',
                offset: '75px',
            })
            setDynamicTitleSpacing('0px')
        } else {
            setDynamicImageValues({
                ...dynamicImageValues,
                width: '33.4%',
                padding: '3rem',
                offset: '0px',
            })
            setDynamicTitleSpacing(`${imageHeight}px`)
        }
    }, [mediaQuery.xs, mediaQuery.sm])

    const imageWidth = useTransform(
        scrollYProgress,
        [0, 0.4],
        ['100%', dynamicImageValues.width]
    )

    const imagePadding = useTransform(
        scrollYProgress,
        [0, 0.3],
        [dynamicImageValues.padding, '0rem']
    )

    const titleSpacing = useTransform(
        scrollYProgress,
        [0.5, 0.6],
        ['0px', dynamicTitleSpacing]
    )

    const imageMobileOffset = useTransform(
        scrollYProgress,
        [0, 0.7],
        [dynamicImageValues.offset, '0px']
    )

    useMotionValueEvent(scrollYProgress, 'change', () => {
        if (imageRef.current && !(mediaQuery.xs || mediaQuery.sm)) {
            setDynamicTitleSpacing(
                imageRef.current?.getBoundingClientRect().height + 'px'
            )
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
                    marginBottom: titleSpacing,
                }}
                className="sticky top-[30vh] z-20 self-start px-4 sm:top-[var(--headerHeightMobile)] sm:bg-primary-white sm:px-0 sm:transition-all sm:delay-100 sm:duration-[600ms] sm:ease-in-out xs:top-[var(--headerHeightMobile)] xs:bg-primary-white xs:px-0 xs:transition-all xs:delay-100 xs:duration-[600ms] xs:ease-in-out"
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
                className="mx-auto w-9/12 pb-12 sm:w-full sm:py-4 xs:w-full xs:py-4"
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
                    paddingBottom: imagePadding,
                    y: imageMobileOffset,
                }}
                className="sticky top-[42vh] z-10 self-start px-4 sm:relative sm:top-0 sm:px-0 xs:relative xs:top-0 xs:px-0"
            >
                {image && (
                    <Image
                        ref={imageRef}
                        className="h-full w-full object-cover"
                        src={image.src}
                        alt={image.alt}
                    />
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
