'use client'

import React from 'react'
import Headlines from '../Headlines/Headlines'
import Image from 'next/image'
import TeaserLayout from './TeaserLayout'
import { TeaserProps } from './TeaserTypes'

const Teaser = ({ ...props }: TeaserProps) => {
    const { title, type, items } = props
    return (
        <div className="sm:px-6 sm:py-12 md:grid md:grid-cols-md md:py-[3.75rem] lg:grid lg:grid-cols-lg lg:py-20 xl:grid xl:grid-cols-xl-ul xl:py-20 xs:px-6 xs:py-12 ul:grid ul:grid-cols-xl-ul ul:py-20">
            {title && (
                <Headlines
                    element="h3"
                    text={title}
                    color="text-primary-soft-black"
                    className="mb-16"
                />
            )}
            {type === 'mixed' ? (
                <MixedTeaser items={items} />
            ) : (
                <SingleTeaser {...props} />
            )}
        </div>
    )
}

const MixedTeaser = ({ items }: TeaserProps) => {
    return items.map((item, index) => {
        const { id, image } = item
        const imageExistInItems = items.filter(
            item => item.image !== undefined
        ).length
        return (
            <div
                key={id}
                style={{
                    gridColumn: index === 0 ? '2 / 2' : '3 / 5',
                }}
                className="sm:mb-4 last:sm:mb-0 xs:mb-4 last:xs:mb-0"
            >
                <TeaserLayout imageExist={imageExistInItems > 0} {...item}>
                    {image !== undefined ? (
                        <>
                            <div
                                style={{
                                    background:
                                        'background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), lightgray 50%',
                                }}
                                className="absolute left-0 top-0 h-full w-full"
                            />
                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={item.text}
                                    className="absolute left-0 top-0 h-full w-full object-cover"
                                />
                            )}
                        </>
                    ) : null}
                </TeaserLayout>
            </div>
        )
    })
}

const SingleTeaser = ({ items }: TeaserProps) => {
    const { id } = items[0]
    return (
        <div
            style={{
                gridColumn: '2 / 5',
            }}
        >
            <TeaserLayout {...items[0]}>
                {id === 'imageTeaser' ? (
                    <>
                        <div
                            style={{
                                background:
                                    'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), lightgray 50%;',
                            }}
                            className="absolute left-0 top-0 h-full w-full"
                        />
                        {items[0].image && (
                            <Image
                                src={items[0].image}
                                alt={items[0].text}
                                className="absolute left-0 top-0 h-full w-full object-cover"
                            />
                        )}
                    </>
                ) : null}
            </TeaserLayout>
        </div>
    )
}

export default Teaser
