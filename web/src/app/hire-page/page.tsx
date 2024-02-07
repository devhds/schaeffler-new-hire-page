import React from 'react'
import ContentLayout from '../../components/ContentLayout/ContentLayout'
import Footer from '../../components/Footer/Footer'

const Page = () => {
    return (
        <>
            <ContentLayout />
            <Footer
                data={{
                    support: [
                        {
                            id: '1',
                            href: '/support1',
                            text: 'Suport 1',
                        },
                        {
                            id: '2',
                            href: '/support2',
                            text: 'Support 2',
                        },
                        {
                            id: '3',
                            href: '/support3',
                            text: 'Support 3',
                        },
                    ],
                    links: [
                        {
                            id: 'leg_not',
                            href: '/legal-notice',
                            text: 'Legal notice',
                        },
                        {
                            id: 'pr_pol',
                            href: '/privacy-policy',
                            text: 'Privacy policy',
                        },
                        {
                            id: 'cond_of_use',
                            href: '/condition-of-use',
                            text: 'Condition of use',
                        },
                        {
                            id: 'cookie_pol',
                            href: '/cookie-policy',
                            text: 'Cookie policy',
                        },
                        {
                            id: 'netiquette',
                            href: '/netiquette',
                            text: 'Netiquette',
                        },
                    ],
                    socialIcons: [
                        {
                            icon: 'Twitter',
                            href: 'https://twitter.com/',
                        },
                        {
                            icon: 'Linkedin',
                            href: 'https://linkedin.com/',
                        },
                    ],
                }}
            />
        </>
    )
}

export default Page
