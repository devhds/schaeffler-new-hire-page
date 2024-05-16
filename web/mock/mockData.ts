import testImage1 from '../assets/images/image_1.png'
import testImage2 from '../assets/images/image_2.png'
import testImage3 from '../assets/images/image_3.png'
import testImage4 from '../assets/images/image_4.png'
import testImage5 from '../assets/images/image_5.png'
import testImage6 from '../assets/images/image_6.png'
import testImage from '../assets/images/bg-image.png'

const testSrc = '/pexels_videos_1448735.mp4'

export const MockData = {
    navigation: {
        navContent: [
            {
                text: 'Start',
                href: '',
            },
            {
                text: 'Werte und Geschichte',
                href: 'werte-und-geschichte',
            },
            {
                text: 'Standorte',
                href: 'standorte',
            },
            {
                text: 'Onboarding',
                href: 'onboarding',
            },
        ],
        languages: [
            {
                value: 'DE',
                label: 'DE',
            },
            {
                value: 'EN',
                label: 'EN',
            },
        ],
    },
    parallaxText: 'Willkommen',
    quotes: {
        text: 'Wir freuen uns, dass du ein Teil von uns wirst und deinen Weg bei Schaeffler gehst! Wir begleiten dich jeden Tag dabei, den Fortschritt mit uns zu gestalten.',
        author: {
            name: 'Klaus Rosenfeld',
            position: 'Vorstandsvorsitzender Schaeffler AG',
        },
    },
    timeline: {
        title: 'Headline optional',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        timeLineList: [
            {
                id: 'fm2kfnk2n3',
                date: '1993',
                icon: null,
                image: null,
                content: {
                    title: 'Wir sind exzellent',
                    description:
                        'Unsere Geschichte der Exzellenz begann mit Friedrich Fischer im Jahr 1883. Durch die Erfindung der Kugelschleif-Maschine ermöglichte er die gleichmäßige Herstellung von gehärteten Stahlkugeln, was den Siegeszug des Kugellagers um die Welt einleitete. Kaum ein Maschinenelement hat die Technologie so stark beeinflusst wie das Wälzlager.  Die exzellente Härte und Gleichmäßigkeit der Stahlkugeln ermöglichte das Kugellager. Genauso ermöglicht uns heute umfassende Expertise, Antworten von höchster Qualität zu finden. Deine Expertise erweitert unsere Möglichkeiten – und wird einige unserer Antworten noch weiter verbessern.',
                    link: '/',
                    images: [
                        {
                            id: '1m23p123p',
                            image: {
                                src: testImage1,
                                alt: 'testImage',
                            },
                            imageCopy:
                                'Subline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
                        },
                        {
                            id: '1p12om3pm745',
                            image: {
                                src: testImage2,
                                alt: 'testImage',
                            },
                            imageCopy:
                                'Subline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
                        },
                        {
                            id: '12m3bhjb785675',
                            image: {
                                src: testImage3,
                                alt: 'testImage',
                            },
                            imageCopy:
                                'Subline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
                        },
                    ],
                    reversedImages: false,
                },
            },
            {
                id: 'fm2312313k2n3',
                date: '1994',
                icon: null,
                image: null,
                content: {
                    title: 'Wir sind exzellent',
                    description:
                        'Unsere Geschichte der Exzellenz begann mit Friedrich Fischer im Jahr 1883. Durch die Erfindung der Kugelschleif-Maschine ermöglichte er die gleichmäßige Herstellung von gehärteten Stahlkugeln, was den Siegeszug des Kugellagers um die Welt einleitete. Kaum ein Maschinenelement hat die Technologie so stark beeinflusst wie das Wälzlager.  Die exzellente Härte und Gleichmäßigkeit der Stahlkugeln ermöglichte das Kugellager. Genauso ermöglicht uns heute umfassende Expertise, Antworten von höchster Qualität zu finden. Deine Expertise erweitert unsere Möglichkeiten – und wird einige unserer Antworten noch weiter verbessern.',
                    link: '/',
                    images: [
                        {
                            id: 'k12n3ok12n3kln',
                            image: {
                                src: testImage4,
                                alt: 'testImage',
                            },
                            imageCopy:
                                'Subline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
                        },
                        {
                            id: '1jk2n3jnkjn978',
                            image: {
                                src: testImage5,
                                alt: 'testImage',
                            },
                            imageCopy:
                                'Subline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
                        },
                    ],
                    reversedImages: true,
                },
            },
            {
                id: '4k23k4m23',
                date: '1995',
                icon: null,
                image: null,
                content: {
                    title: 'Wir sind exzellent',
                    description:
                        'Unsere Geschichte der Exzellenz begann mit Friedrich Fischer im Jahr 1883. Durch die Erfindung der Kugelschleif-Maschine ermöglichte er die gleichmäßige Herstellung von gehärteten Stahlkugeln, was den Siegeszug des Kugellagers um die Welt einleitete. Kaum ein Maschinenelement hat die Technologie so stark beeinflusst wie das Wälzlager.  Die exzellente Härte und Gleichmäßigkeit der Stahlkugeln ermöglichte das Kugellager. Genauso ermöglicht uns heute umfassende Expertise, Antworten von höchster Qualität zu finden. Deine Expertise erweitert unsere Möglichkeiten – und wird einige unserer Antworten noch weiter verbessern.',
                    link: '/',
                    images: [
                        {
                            id: '123mklmlcsc',
                            image: {
                                src: testImage6,
                                alt: 'testImage',
                            },
                            imageCopy:
                                'Subline Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
                        },
                    ],
                    reversedImages: true,
                },
            },
        ],
    },
    videoFullScreen: {
        video: {
            src: testSrc,
        },
        headline: 'Hello World!',
        description: 'Description',
    },
    imageFullScreen: {
        image: {
            src: testImage,
            alt: 'testImage',
        },
    },
    teasers: {
        items: {
            single: [
                {
                    id: 'kpl233m214n6jn134',
                    overline: 'Overline',
                    href: '/',
                    text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
            ],
            double: [
                {
                    id: '32n4on23o32n4oi23n4',
                    overline: 'Overline',
                    text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
                    href: '/',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
                {
                    id: '1934509ofm1m231',
                    overline: 'Overline',
                    text: 'Headline Lorem ipsum dolor sit amet.',
                    video: testSrc,
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
            ],
            triple: [
                {
                    id: '1934509olm1m231',
                    overline: 'Overline',
                    text: 'Headline Lorem ipsum dolor sit amet.',
                    video: testSrc,
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
                {
                    id: '1934508ofm1m231',
                    overline: 'Overline',
                    text: 'Headline Lorem ipsum dolor sit amet.',
                    image: { src: testImage, alt: 'testImage' },
                    href: '/',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
                {
                    id: '1934109ofm1m231',
                    overline: 'Overline',
                    text: 'Headline Lorem ipsum dolor sit amet.',
                    video: testSrc,
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
            ],
        },
    },
    textBlock: {
        title: 'Brașov, Rumänien',
        description:
            'Sie produzieren Komponenten für die Automobil- und Automobilindustrie sowie für die Windindustrie. Die Fabrik in Brasov nimmt eine Fläche von 42,5 Hektar ein, auf der 6 Produktionshallen mit mehr als 140.000 Quadratmeter stehen. Sie haben Rekordprodukte hergestellt: das schwerste Lager mit 10,5 Tonnen, das größte Lager mit einem Durchmesser von 4 m, und spezielle Lager für Wind- oder Bergbauindustrie.',
        headline: 'Ana, Marko, Luka und ihre Perspektiven auf Elektromobilität',
    },
    footer: {
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
        socialLinks: [
            {
                id: 'twitter',
                icon: 'Twitter',
                href: 'https://twitter.com/',
            },
            {
                id: 'linkedin',
                icon: 'Linkedin',
                href: 'https://linkedin.com/',
            },
        ],
    },
    accordion: {
        title: 'Accordion',
        description:
            'The more unpredictable the world around us is becoming the more important it will be to swap rigid protective mechanisms for agile strategies and to embrace omnipresent change. Or, to put it in a nutshell: resilience is the key to defying the storms of our times. In the 01/2023 issue of our technology magazine tomorrow, we look at the focus topic Resilience from many different angles',
        items: [
            {
                id: '1io23nio1k23',
                headline:
                    'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
                expandedText:
                    "Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum' Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum'",
            },
            {
                id: '12j3n1oj2n3',
                headline:
                    'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
                disable: true,
                expandedText:
                    'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
            },
            {
                id: 'knkl67n7k5n',
                headline:
                    'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
                expandedText:
                    'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
            },
        ],
    },
    socialMedia: {
        title: 'Follow us also on social media',
        socialMediaList: [
            {
                id: 'rnweornwoeir',
                icon: 'Twitter',
                href: '/',
            },
            {
                id: '123m1m235',
                icon: 'Linkedin',
                href: '/',
            },
            {
                id: '123m1l23l11',
                icon: 'Facebook',
                href: '/',
            },
            {
                id: '123m1l23l11',
                icon: 'YouTube',
                href: '/',
            },
            {
                id: '123m1l23l11',
                icon: 'Instagram',
                href: '/',
            },
        ],
    },
}
