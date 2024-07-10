import React from 'react'

interface GridColumnsLayoutProps extends React.HTMLProps<HTMLDivElement> {
    additionalStyles?: string
    children: React.ReactNode
    id?: string
}

const GridColumnsLayout = React.forwardRef(
    (props: GridColumnsLayoutProps, ref: React.Ref<HTMLDivElement>) => (
        <div
            id={props.id}
            ref={ref}
            className={`md:grid md:grid-cols-md lg:grid lg:grid-cols-lg xl:grid xl:grid-cols-xl-ul ul:grid ul:grid-cols-xl-ul ${props.additionalStyles}`}
        >
            {props.children}
        </div>
    )
)

GridColumnsLayout.displayName = 'GridColumnsLayout'

export default GridColumnsLayout
