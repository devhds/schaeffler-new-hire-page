import React from 'react'
import { SocialMediaTypes } from './SocialMediaTypes'
import Headlines from '../Headlines/Headlines'
import SocialIcon from '../Button/SocialIcon'
import GridColumnsLayout from '../layout/GridColumnsLayout'

const SocialMedia = ({ title, socialMediaList }: SocialMediaTypes) => {
    return (
        <GridColumnsLayout
            additionalStyles={`relative z-[31] my-12 flex flex-col items-center bg-secondary-forest-10 py-20 pl-4 sm:my-8 sm:mr-0 sm:py-12 sm:pl-0 md:my-10 md:mr-14 md:py-16 lg:mr-12 xl:mr-20 xs:my-8 xs:mr-0 xs:py-12 xs:pl-0 ul:mr-20`}
        >
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className="w-fit pb-6 sm:pb-4 md:pb-4 xs:pb-4"
            >
                <Headlines
                    element="h3"
                    text={title}
                    color="text-primary-soft-black"
                />
            </div>
            <div
                style={{
                    gridRow: '2 / 2',
                    gridColumn: '3 / 5',
                }}
                className="ml-36 flex w-fit flex-row self-center sm:ml-0 xs:ml-0"
            >
                {socialMediaList.map(socialMedia => {
                    return (
                        <div key={socialMedia.id} className="mr-6 last:mr-0">
                            <SocialIcon
                                href={socialMedia.href}
                                icon={socialMedia.icon}
                                borderAvailable
                            />
                        </div>
                    )
                })}
            </div>
        </GridColumnsLayout>
    )
}

export default SocialMedia
