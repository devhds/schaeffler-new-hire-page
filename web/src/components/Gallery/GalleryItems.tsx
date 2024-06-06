import React, { useCallback, useRef, useState } from 'react'
import { GalleryItem } from './GalleryTypes'
import IconButton from '../Button/IconButton'
import BodyText from '../Text/BodyText'
import LabelText from '../Text/LabelText'
import Image from 'next/image'
import { motion, PanInfo, useMotionValue, useSpring } from 'framer-motion'

const DRAG_THRESHOLD = 150

const GalleryItems = ({ items }: { items: GalleryItem[] }) => {
    const [currentElementIndex, setCurrentElementIndex] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const canScrollPrev = currentElementIndex > 0
    const canScrollNext = currentElementIndex < items.length - 1
    const itemsRef = useRef<HTMLDivElement[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    const offsetX = useMotionValue(0)
    const animatedX = useSpring(offsetX, {
        damping: 20,
        stiffness: 150,
    })

    const handleNextItem = useCallback(() => {
        if (!canScrollNext) return

        const nextWidth = itemsRef.current
            .at(currentElementIndex + 1)
            ?.getBoundingClientRect().width
        if (nextWidth === undefined) return
        offsetX.set(offsetX.get() - nextWidth)

        setCurrentElementIndex(prev => prev + 1)
    }, [currentElementIndex, offsetX])

    const handlePrevItem = useCallback(() => {
        if (!canScrollPrev) return

        const nextWidth = itemsRef.current
            .at(currentElementIndex - 1)
            ?.getBoundingClientRect().width
        if (nextWidth === undefined) return
        offsetX.set(offsetX.get() + nextWidth)

        setCurrentElementIndex(prev => prev - 1)
    }, [currentElementIndex, offsetX])

    const handleDrag = useCallback(
        (_: MouseEvent, { offset: { x: dragOffset } }: PanInfo) => {
            setIsDragging(false)

            animatedX.stop()

            const currentOffset = offsetX.get()

            if (
                Math.abs(dragOffset) < DRAG_THRESHOLD ||
                (!canScrollPrev && dragOffset > 0) ||
                (!canScrollNext && dragOffset < 0)
            ) {
                animatedX.set(currentOffset)
            }

            let offsetWidth = 0
            for (
                let i = currentElementIndex;
                dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
                dragOffset > 0 ? i-- : i++
            ) {
                const itemOffsetWidth = itemsRef.current[i]?.offsetWidth
                const prevItemWidth = itemsRef.current[i - 1]?.offsetWidth
                const nextItemWidth = itemsRef.current[i + 1]?.offsetWidth

                if (
                    (dragOffset > 0 &&
                        dragOffset > offsetWidth + itemOffsetWidth &&
                        i > 1) ||
                    (dragOffset < 0 &&
                        dragOffset < offsetWidth + -itemOffsetWidth &&
                        i < itemsRef.current.length - 2)
                ) {
                    dragOffset > 0
                        ? (offsetWidth += prevItemWidth)
                        : (offsetWidth -= nextItemWidth)
                    continue
                }

                if (dragOffset > 0 && currentElementIndex !== 0) {
                    offsetX.set(currentOffset + offsetWidth + prevItemWidth)
                    setCurrentElementIndex(i - 1)
                } else if (
                    dragOffset < 0 &&
                    currentElementIndex !== items.length - 1
                ) {
                    offsetX.set(currentOffset + offsetWidth - nextItemWidth)
                    setCurrentElementIndex(i + 1)
                }
                break
            }
        },
        [animatedX, offsetX, currentElementIndex, items.length]
    )

    const disableDragClick = useCallback(
        (e: React.MouseEvent) => {
            if (isDragging) {
                e.preventDefault()
                e.stopPropagation()
            }
        },
        [isDragging]
    )

    const variants = {
        active: {
            opacity: 1,
        },
        disable: {
            opacity: 0,
        },
    }

    return (
        <>
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className="relative flex h-full flex-col justify-between px-4 sm:pl-0 sm:pr-6 xs:pl-0 xs:pr-6"
            >
                <div className="flex flex-row items-center gap-x-8 sm:justify-between sm:pb-6 xs:justify-between xs:pb-6">
                    <div className="flex flex-row gap-x-4">
                        <IconButton
                            onClick={handlePrevItem}
                            icon="ArrowForward"
                            className="rotate-180"
                            disabled={currentElementIndex === 0}
                        />
                        <IconButton
                            onClick={handleNextItem}
                            icon="ArrowForward"
                            disabled={currentElementIndex === items.length - 1}
                        />
                    </div>
                    <div className="flex flex-row">
                        <BodyText
                            text={'0' + (currentElementIndex + 1)}
                            size="small"
                            color="text-primary-soft-black"
                        />
                        <LabelText
                            text="|"
                            size="small"
                            className="mx-1.5"
                            color="text-primary-carbon-grey-80"
                        />
                        <BodyText
                            text={'0' + items.length}
                            size="small"
                            color="text-primary-carbon-grey-80"
                        />
                    </div>
                </div>
                <div className="sm:hidden xs:hidden">
                    <motion.div
                        variants={variants}
                        key={currentElementIndex}
                        initial="disable"
                        animate="active"
                        transition={{
                            opacity: { duration: 0.3 },
                        }}
                    >
                        <BodyText
                            text={items[currentElementIndex].title}
                            size="medium"
                            color="text-primary-soft-black"
                            className="mb-6"
                            fontWeight="semi-bold"
                        />
                        <BodyText
                            text={items[currentElementIndex].description}
                            size="medium"
                            color="text-primary-soft-black"
                            className="mb-6"
                        />
                    </motion.div>
                </div>
            </div>
            <div
                style={{
                    gridColumn: '3 / 6',
                }}
                className={`overflow-hidden sm:pr-6 md:pr-9 lg:pr-8 xl:pr-16 xs:pr-6 ul:pr-16`}
            >
                <motion.div
                    style={{
                        x: animatedX,
                    }}
                    ref={containerRef}
                    drag="x"
                    dragConstraints={{
                        left: -(
                            itemsRef.current[
                                currentElementIndex + 1
                            ]?.getBoundingClientRect().width *
                            (items.length - 1)
                        ),
                        right: itemsRef.current[
                            currentElementIndex + 1
                        ]?.getBoundingClientRect().width,
                    }}
                    onDragStart={() => {
                        setIsDragging(true)
                    }}
                    onDragEnd={handleDrag}
                    className="flex w-full flex-row"
                >
                    {items.map((item, index) => (
                        <div
                            ref={el => {
                                if (itemsRef.current) {
                                    if (el) {
                                        itemsRef.current[index] = el
                                    }
                                }
                            }}
                            onClick={disableDragClick}
                            key={item.id}
                            className={`min-w-full ${currentElementIndex !== index ? 'pr-8 sm:pr-6 xs:pr-6' : 'px-4 sm:pl-0 sm:pr-2 xs:pl-0 xs:pr-2'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        >
                            <Image
                                className="pointer-events-none h-full w-full object-cover"
                                src={item.image.src}
                                alt={item.image.alt}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="hidden flex-col sm:flex sm:pr-6 sm:pt-2 xs:flex xs:pr-6 xs:pt-2">
                <motion.div
                    variants={variants}
                    key={currentElementIndex}
                    initial="disable"
                    animate="active"
                    transition={{
                        opacity: { duration: 0.3 },
                    }}
                >
                    <BodyText
                        text={items[currentElementIndex].title}
                        size="medium"
                        color="text-primary-soft-black"
                        className="mb-6"
                        fontWeight="semi-bold"
                    />
                    <BodyText
                        text={items[currentElementIndex].description}
                        size="medium"
                        color="text-primary-soft-black"
                    />
                </motion.div>
            </div>
        </>
    )
}

export default GalleryItems
