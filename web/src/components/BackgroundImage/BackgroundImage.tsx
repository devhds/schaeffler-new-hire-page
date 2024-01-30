import React from 'react'
import Image from 'next/image'
import bgImage from '../../../assets/images/bg-image.png'

const BackgroundImage = () => {
    return (
        <>
            <Image
                className="absolute left-0 top-0 h-full w-full object-cover"
                src={bgImage}
                alt="bg-image"
            />
        </>
    )
}

export default BackgroundImage
