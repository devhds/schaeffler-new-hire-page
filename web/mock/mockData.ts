import testImage1 from '../assets/images/image_1.png'
import testImage2 from '../assets/images/image_2.png'
import testImage3 from '../assets/images/image_3.png'
import testImage4 from '../assets/images/image_4.png'
import testImage5 from '../assets/images/image_5.png'
import testImage6 from '../assets/images/image_6.png'
import firstImageFullScreen from '../assets/images/firstImageFullScreen.jpg'
import secondImageFullScreen from '../assets/images/secondImageFullScreen.jpg'
import thirdImageFullScreen from '../assets/images/thirdImageFullScreen.jpg'
import firstQuoteImage from '../assets/images/firstQuoteImage.jpg'
import secondQuoteImage from '../assets/images/secondQuoteImage.jpg'
import singleTeaserImage from '../assets/images/singleTeaserImage.jpg'
import doubleTeaserSecondImage from '../assets/images/doubleTeaserSecondImage.jpg'
import doubleTeaserFirstImage from '../assets/images/doubleTeaserFirstImage.jpg'
import firstJourney from '../assets/images/firstJourneyImage.png'
import secondJourney from '../assets/images/secondJourneyImage.png'
import thirdJourney from '../assets/images/thirdJourneyImage.png'
import textImageBlock from '../assets/images/textImageBlock.png'
import secondTextImageBlock from '../assets/images/secondTextImageBlock.png'
import firstGalleryImage from '../assets/images/galleryImage.png'
import secondGalleryImage from '../assets/images/secondGalleryImage.png'
import thirdGalleryImage from '../assets/images/thirdGalleryImage.png'

const testSrc = '/NewHire.mp4'

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
        copy: {
            promotionText: 'Willkommen bei schaeffler',
            description: 'Deine Onboarding Journey',
        },
        video: {
            src: testSrc,
        },
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
    gallery: {
        headline: 'Headline optional zweizeilig lorem ipsum dolor sit amet ',
        gallery: [
            {
                id: '1n23ion3ioj5n',
                title: 'An welchem Schaeffler Standort arbeitest du? Und was macht ihn im Schaeffler Universum besonders?',
                description:
                    'Ich arbeite am Standort in Schweinfurt. Dieser Standort ist führend in der Herstellung von hochpräzisen Kugellagern für die Luft- und Raumfahrt. Die Expertise und das technische Know-how hier sind beeindruckend.',
                image: {
                    src: firstGalleryImage,
                    alt: 'firstGalleryImage',
                },
            },
            {
                id: '124lm34pkl6m3kl52',
                title: 'Gibt es besondere interessante Fakten über den Standort?',
                description:
                    'Wir haben hier über 7.000 Mitarbeitende und sind weltweit für unsere Präzision und Zuverlässigkeit in der Luft- und Raumfahrt-industrie bekannt. Unsere Kugellager werden in zahlreichen Flugzeugmodellen eingesetzt. Das hohe Maß an Qualität und Innovation, das hier gelebt wird, ist inspirierend.',
                image: {
                    src: secondGalleryImage,
                    alt: 'secondGalleryImage',
                },
            },
            {
                id: '12oi3ni46bnij34n',
                title: 'Wie wurdest du von deinen Kollegen:innen empfangen?',
                description:
                    'Mit offenen Armen. Es wurde mir alles gezeigt und ich fühlte mich sofort als Teil des Teams. Die Kollegialität und das Miteinander sind hier wirklich besonders.',
                image: {
                    src: thirdGalleryImage,
                    alt: 'thirdGalleryImage',
                },
            },
        ],
    },
    journey: [
        {
            id: '12o3nokn76l5n4kl7n45k',
            image: {
                src: firstJourney,
                alt: 'journey_img',
            },
            headline: 'Vor Ihrem ersten Tag bei uns',
            description:
                'Wir freuen uns, Sie bald bei uns vor Ort begrüßen zu dürfen! Die folgenden Punkte helfen Ihnen und uns dabei, Ihren Start so erfolgreich wie möglich zu gestalten.',
            copy: [
                'Informationen oder Unterlagen fragen wir bei Bedarf rechtzeitig bei Ihnen an, um Ihren ersten Arbeitstag ideal vorzubereiten. Bitte schicken Sie uns diese rechtzeitig und vollständig zu.',
                'Ihre Ansprechpartner*innen für Fragen während Ihrer kompletten Onboarding Journey sind Ihr Onboarding-Team: Ihre Führungskraft,  Ihr(e) Personal-Ansprechpartner*in und Ihr Buddy. Sie finden sie im Onboarding Portal.',
                'Entdecken Sie schon vor Ihrem Start die Inhalte, die wir Ihnen hier und über andere Quellen zur Verfügung stellen, auf freiwilliger Basis. Nach Ihrem Start haben Sie noch ausreichend Zeit, sich mit Schaeffler vertraut zu machen.',
                'Per E-Mail bekommen Sie vom Onboarding-Team Updates und Infos zur Vorbereitung auf Ihren ersten Tag.',
            ],
        },
        {
            id: '123m12onmo8n67lkn9kl67nlk',
            image: {
                src: secondJourney,
                alt: 'journey_img',
            },
            headline: 'Ihre ersten Tage bei Schaeffler',
            description:
                'Ihr Start bei uns ist uns sehr wichtig und soll ein einzigartiges Erlebnis werden. Daher möchten wir Ihnen anbei erste Einblicke in Ihre ersten Tage geben.',
            copy: [
                'Alle notwendigen Details für Ihren ersten Tag erhalten Sie einige Tage im Voraus. Speichern Sie sie am besten auf Ihrem Mobilgerät, sodass Sie schnell darauf zugreifen können.',
                'Nehmen Sie sich ruhig Zeit für Ihr Team, um ein herzliches Willkommen zu erleben, sich vertraut zu machen und zu vernetzen. Ihre ersten Tage sind für Sie eine sicherlich aufregende Zeit, und genauso für uns.',
                'Ihren individuellen Einarbeitungsplan haben Ihre Führungskraft und Ihr Team vorbereitet. Besprechen Sie diesen Leitfaden für Ihre Onboarding Journey und die Einarbeitung in die neue Rolle am besten mit Ihrer Führungskraft.',
                'Wo ist Ihr Spind, wo die Küche? Ein gutes Ankommen bedeutet auch, den neuen Arbeitsort kennenzulernen. Ihr Onboarding Team hat jederzeit ein offenes Ohr für Sie, gehen Sie dafür einfach auf sie zu.',
            ],
        },
        {
            id: '12lk31kl2n3k12l12,3l1,2pl3,1pl',
            image: {
                src: thirdJourney,
                alt: 'journey_img',
            },
            headline: 'Die folgenden Wochen',
            description:
                'Die ersten Aufgaben haben Sie in den ersten spannenden Tagen und Wochen bei uns schon gemeistert. Jetzt können Sie sich intensiver mit Ihrer neuen Rolle und der Bearbeitung Ihres Einarbeitungsplans befassen. Wir freuen uns, mit Ihnen zusammenarbeiten zu dürfen.',
            copy: [
                'Ihr internes soziales Netzwerk kann Sie bei vielen täglichen Aufgaben unterstützen. Lernen Sie Ihre neuen Kolleg*innen im Team und aus anderen Fachbereichen kennen und verstehen Sie mit jedem Tag Schaeffler und die Personen, die es ausmacht, ein bisschen besser. Dies gibt Ihnen zudem die Chance sich mit den Personen auszutauschen, mit denen Sie bei der Ausübung Ihrer neuen Rolle im direkten Kontakt stehen. Je nach Standort werden lokale Netzwerkveranstaltungen angeboten. Fragen Sie hier gerne Ihre lokalen Kolleg*innen, welche Angebote es bei Ihnen vor Ort gibt.',
                'Die Schaeffler Academy bietet Ihnen ab Ihrem Start ein breites Portfolio an Schulungen. Neben den verpflichtenden Trainings für neue Mitarbeitende, kann ihnen Ihre Führungskraft rollenspezifische Schulungen empfehlen. Unser Angebot umfasst aber auch viele digitale Trainings, an denen Sie freiwillig teilnehmen können. Schauen Sie sich gerne nach Ihrem Start im Angebot der Academy um.',
                'Regelmäßiger Austausch mit Ihrer Führungskraft ist während der Einarbeitungszeit besonders wichtig. Besprechen Sie Ihren Einarbeitungsplan und holen Sie sich Feedback. Mit regelmäßigen Gesprächen entlang Ihrer Onboarding Journey stellen Sie sicher, dass Sie auf dem richtigen Weg sind.',
                'Ihre Erfahrungen und Erkenntnisse auf der Onboarding Journey sind für uns wertvoll. In vielen Ländern führen wir einmal nach zwei Wochen und einmal nach vier Monaten nach dem Start freiwillige und anonymisierte Umfragen durch. Mit Ihrem Feedback helfen Sie uns, die Onboarding Journey für Ihre zukünftige Kolleg*innen weiter optimieren zu können.',
                'Nochmals herzlich willkommen bei Schaeffler. Wir freuen uns auf Sie!',
            ],
        },
    ],
    quotes: [
        {
            image: {
                src: firstQuoteImage,
                alt: 'FirstQuote',
            },
            text: 'Wir freuen uns, dass du ein Teil von uns wirst und deinen Weg bei Schaeffler gehst! Wir begleiten dich jeden Tag dabei, den Fortschritt mit uns zu gestalten.',
            author: {
                name: 'Klaus Rosenfeld',
                position: 'Vorstandsvorsitzender Schaeffler AG',
            },
        },
        {
            image: {
                src: secondQuoteImage,
                alt: 'secondQuoteImage',
            },
            text: 'Gemeinsam bilden wir eine starke Organisation, in der wir Herausforderungen erfolgreich bewältigen können und die Zukunft der Bewegung gestalten.',
            author: {
                name: 'Frau Dr. Fontaine',
                position: 'Vorstand Personal',
            },
        },
    ],
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
    videoFullScreen: [
        {
            media: {
                video: {
                    src: testSrc,
                },
            },
            headline: 'Wo Bewegung ist, da ist Schaeffler Technologie.',
            description:
                'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        },
    ],
    imageFullScreen: [
        {
            image: {
                src: firstImageFullScreen,
                alt: 'firstImageFullScreen',
            },
            copy: {
                headline: 'Starte mit starken Grundlagen.',
                description:
                    'Entdecke die Grundlagen, die Schaeffler zu dem gemacht haben, was es heute ist: Exzellenz, Innovation, Nachhaltigkeit und Leidenschaft. Diese Tradition wegweisender Technologie hält uns in Bewegung. Denn Bewegung ist essenziell für unsere Existenz und für unsere Zukunft.',
                underline: 'Picture: Max Mustermann / Bildunterschrift',
            },
        },
        {
            image: {
                src: secondImageFullScreen,
                alt: 'secondImageFullScreen',
            },
            copy: {
                headline: 'Lerne neue Perspektiven kennen.',
                description:
                    'Deine zukünftigen Kolleg*innen an Schaeffler-Standorten auf der ganzen Welt erzählen über die Zusammenarbeit in Teams, den Fokus auf Ergebnissen, das Ausspielen von Stärken und darüber wie sie die Veränderung von Schaeffler unterstützen.',
                underline: 'Picture: Max Mustermann / Bildunterschrift',
            },
        },
        {
            image: {
                src: thirdImageFullScreen,
                alt: 'thirdImageFullScreen',
            },
            copy: {
                headline: 'Sei einen Schritt voraus.',
                description:
                    'Für uns ist es wichtig, dass du dich vom ersten Tag an willkommen fühlst und weißt, wie deine ersten Tage bei uns aussehen werden. Egal an welchem unserer vielen globalen Standorte: es liegt uns am Herzen, dir eine nahtlose Einarbeitung zu gewährleisten. Bekomme erste Einblicke in  deine Onboarding Journey und werde Teil unseres Teams.',
                underline: 'Picture: Max Mustermann / Bildunterschrift',
            },
        },
    ],
    teasers: {
        items: {
            single: [
                {
                    id: 'kpl233m214n6jn134',
                    overline: 'Onboarding portal',
                    href: '/',
                    image: {
                        src: singleTeaserImage,
                        alt: 'singleTeaserImage',
                    },
                    text: 'Alle persönlichen Informationen findest du hier.',
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
            ],
            double: [
                {
                    id: '32n4on23o32n4oi23n4',
                    overline: 'Events',
                    text: 'Lorem ipsum dolor sit amet consetetur sadipscing',
                    href: '/',
                    image: {
                        src: doubleTeaserFirstImage,
                        alt: 'doubleTeaserFirstImage',
                    },
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
                {
                    id: '1934509ofm1m231',
                    overline: 'corporate website',
                    text: 'Headline Lorem ipsum dolor sit amet.',
                    href: '/',
                    image: {
                        src: doubleTeaserSecondImage,
                        alt: 'doubleTeaserSecondImage',
                    },
                    description:
                        'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                },
            ],
        },
    },
    textBlock: [
        {
            title: 'Wo Bewegung ist, da ist Schaeffler.',
            description:
                'Leben bedeutet Bewegung, im Kleinen wie im Großen. Unsere Welt ist ständig in Bewegung. \n' +
                'Schaeffler bedeutet Technologie für Bewegung. Unsere Produkte halten den Alltag am Laufen. Seit der Erfindung des käfiggeführten Nadellager im Jahr 1950 bis heute, langlebig und präzise.  Unsere Identität als global aktives Familienunternehmen gründet seit mehr als 75 Jahren auf den Ideen und dem Anspruch unserer Gründer. Wir werden vereint und geleitet von unseren Unternehmenswerten: nachhaltig, innovativ, exzellent und leidenschaftlich. Sie begründeten unsere Erfolge und unsere Strategie für die Zukunft.',
            headline: 'Geschichte und Werte',
        },
        {
            title: '',
            description:
                'Wir liefern unseren Kunden innovative Technologie – in ihre Systeme integriert, präzise und von höchster Qualität. Der Zusammenschluss von Schaeffler und Vitesco Technologies führt diese Tradition weiter. Unsere sechs Produktfamilien wachsen und ergänzen sich: Guide, Transmit, Generate, Drive, Energize, und Sustain Motion versorgen das gesamte Bewegungsspektrum.\n' +
                'Der Schlüssel zu dieser Strategie sind unsere Mitarbeiter*innen – wie du. Deshalb geben wir dir die nötigen Ressourcen, um innovativ zu sein. Wir unterstützen deine persönliche und berufliche Entwicklung, damit du einen Schritt voraus bleibst. Wir kooperieren eng mit unseren Kunden und Partnern und optimieren unsere Innovationen für die Anwendung. Und gemeinsam mit dir entwickeln wir unsere Produkte und unser Unternehmen nachhaltig und gestalten Bewegung auch in Zukunft. Wir sind Schaeffler, the Motion Technology Company.',
            headline: 'Strategie und Kultur',
        },
        {
            title: 'Gut zu wissen',
            description:
                'Ein Instrumentenrotator von Schaeffler positioniert eines der weltgrößten Spiegelteleskope in La Palma. Er steuert das Fokusverfolgungs- und Schnellpositionierungssystem, das die rund zwei Tonnen schwere Teleskopkamera während der gesamten Beobachtung gleichmäßig dreht, und perfekt zum Himmel ausrichtet.',
            headline:
                'Mit uns beobachten Wissenschaftler weit entfernte Galaxien.',
            imageContent: {
                image: {
                    src: doubleTeaserFirstImage,
                    alt: 'doubleTeaserFirstImage',
                },
                underline:
                    'Auf dem Roque de los Muchachos erwarten Astronomen mehrere Teleskope und ein geradezu perfekter Blick ins Weltall.',
            },
        },
        {
            title: 'Gut zu wissen',
            description:
                '83% wollen die nächsten drei Jahre oder länger bei uns arbeiten. Damit übertreffen wir den globalen externen Benchmark um 15%.',
            headline:
                'Überdurchschnittlich viele unserer Mitarbeiter sehen ihre Zukunft fest bei Schaeffler.',
            imageContent: {
                image: {
                    src: textImageBlock,
                    alt: 'textImageBlock',
                },
            },
        },
        {
            title: 'Gut zu wissen',
            description:
                'Unsere eigene Produktion wird bis 2030 und unsere Zulieferkette bis 2040 klimaneutral. Bis 2025 werden wir bereits drei Viertel der Produktionsemissionen im Vergleich zu 2019 vermeiden. Dabei stehen fast nur konkrete Reduktionsmaßnahmen im Fokus. Lediglich unvermeidbare Emissionen gleichen wir mit Kompensationsmaßnahmen aus.',
            headline: 'Die Schaeffler Gruppe wird bis 2040 klimaneutral.',
            imageContent: {
                image: {
                    src: secondTextImageBlock,
                    alt: 'textImageBlock',
                },
            },
        },
    ],
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
                text: 'Impressum',
            },
            {
                id: 'pr_pol',
                href: '/privacy-policy',
                text: 'Datenschutzerklärung',
            },
            {
                id: 'cond_of_use',
                href: '/condition-of-use',
                text: 'Nutzungsbedingungen',
            },
            {
                id: 'cookie_pol',
                href: '/cookie-policy',
                text: 'Cookie-Richtlinie',
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
            {
                id: 'xing',
                icon: 'Xing',
                href: 'https://xing.com/',
            },
            {
                id: 'facebook',
                icon: 'Facebook',
                href: 'https://linkedin.com/',
            },
            {
                id: 'instagram',
                icon: 'Instagram',
                href: 'https://linkedin.com/',
            },
            {
                id: 'youtube',
                icon: 'YouTube',
                href: 'https://twitter.com/',
            },
        ],
    },
    accordion: {
        title: 'FAQ',
        items: [
            {
                id: '1io23nio1k23',
                headline:
                    'Wie kann ich mich am besten auf meinen ersten Tag vorbereiten?',
                expandedText:
                    'Die beste Vorbereitung für deinen ersten Tag besteht darin, die Informationen, die du von deinem Onboarding Team bei Schaeffler erhalten hast, zu lesen und alle angeforderten, notwendigen Informationen und Dokumente so früh wie möglich einzureichen, damit wir auf unserer Seite alles vorbereiten können. Schaue dir  gerne die zusätzlichen Inhalte an, die wir dir hier oder über andere Quellen angeboten haben. Bitte beachte, dass dies freiwillig ist. \n' +
                    '\n' +
                    'Darüber hinaus kannst du Fragen vorbereiten, die du deinem neuen Vorgesetzten oder deinen neuen Kolleg*innen in den ersten Tagen stellen möchtest – über den Job, die Zusammenarbeit oder auch einfach Fragen zum Start von Small Talk.\n' +
                    '\n' +
                    'Bitte speichere die Informationen zu deinem ersten Tag (Treffpunkt, Startzeit etc.) auf deinem Mobiltelefon, um alle Informationen leicht verfügbar zu haben.',
            },
            {
                id: '12j3n1oj2n3',
                headline:
                    'An wen kann ich mich wenden, um herauszufinden, wie ich mich auf meinen ersten Tag vorbereiten kann oder wie der Dresscode aussieht?',
                expandedText:
                    'Im Rahmen des Auswahlprozesses oder in den letzten Tagen hast du bereits mehrere Schaeffler-Kolleg*innen kennengelernt oder deren Kontaktdaten erhalten, um den Kontakt selbst aufzubauen. Diese Personen stehen dir auch während deines Onboarding-Prozesses zur Seite. Wir empfehlen dir dringend, dich mit uns in Verbindung zu setzen, wenn du Fragen oder Neuigkeiten hast, die du teilen möchtest, oder wenn du andere Themen ansprechen möchtest.',
            },
            {
                id: 'knkl67n7k5n',
                headline:
                    'Wie erhalte ich Informationen darüber, wo und wann ich an meinen neuen Arbeitsplatz kommen soll?',
                expandedText:
                    'Du erhältst einige Tage vor deinem Start Informationen darüber, wann und wohin du an deinem ersten Tag anreisen kannst. Solltest du nichts erhalten haben, wende dich bitte an deine Ansprechpartner*innen.',
            },
            {
                id: 'knk21l67n7k5n',
                headline:
                    'Was mache ich, wenn ich am ersten Arbeitstag krank werde?',
                expandedText:
                    'Solltest du aufgrund einer Krankheit, eines Unfalls oder aus anderen unvorhersehbaren   Gründen nicht in der Lage sein, zur Arbeit zu kommen, teile dies bitte deiner   Führungskraft mit. Teile uns bitte auch umgehend die voraussichtlichen Dauer   deiner Abwesenheit mit. Vielen Dank!',
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
