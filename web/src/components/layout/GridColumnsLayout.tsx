import React from 'react'

interface GridColumnsLayoutTypes extends React.HTMLProps<HTMLDivElement> {
    additionalStyles?: string
    children: React.ReactNode
}

const GridColumnsLayout = React.forwardRef(
    (props: GridColumnsLayoutTypes, ref: React.Ref<HTMLDivElement>) => (
        <div
            ref={ref}
            className={`md:grid md:grid-cols-md lg:grid lg:grid-cols-lg xl:grid xl:grid-cols-xl-ul ul:grid ul:grid-cols-xl-ul ${props.additionalStyles}`}
        >
            {props.children}
        </div>
    )
)

export default GridColumnsLayout
