import { Config } from 'tailwindcss'
// !! IMPORTANT INFORMATION FOR @MEDIA and @SCREENS !!

// XS VIEWPORT - (EXTRA SMALL VIEWPORT, MAX 375PX)
// SM VIEWPORT - (SMALL VIEWPORT, MIN 600PX - MAX 904PX)
// MD VIEWPORT - (MEDIUM VIEWPORT, MIN 905PX - MAX 1239PX)
// LG VIEWPORT - (LARGE VIEWPORT, MIN 1240PX MAX 1439PX)
// XL VIEWPORT - (EXTRA LARGE VIEWPORT, MIN 1440PX - MAX 2879PX)
// UL VIEWPORT - (ULTRA LARGE VIEWPORT, MIN 2880PX)

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            lineHeight: {
                '5/5': '1.375rem',
            },
            spacing: {
                30: '7.5rem',
            },
            screens: {
                xs: { max: '599px' },
                sm: { min: '600px', max: '904px' },
                md: { min: '905px', max: '1239px' },
                lg: { min: '1240px', max: '1439px' },
                xl: { min: '1440px', max: '2879px' },
                ul: { min: '2880px' },
                'logo-xs': { max: '599px' },
                'logo-sm-md': { min: '600px', max: '1239px' },
                'logo-lg': { min: '1240px' },
                'hover-hover': { raw: '(hover: hover)' },
            },
            gridTemplateColumns: {
                md: '2.25rem 1fr 1fr 1fr 2.25rem',
                lg: '2rem 1fr 1fr 1fr 2rem',
                'xl-ul': '4rem 1fr 1fr 1fr 4rem',
            },
            fontSize: {
                // H1 (XS, SM-MD (from small to medium), LG, XL)
                'h1-xs': ['clamp(2.25rem, 1vw + 2.25rem, 2.625rem)', '128%'],
                'h1-sm': ['clamp(2.625rem, 3vw + 1.6rem, 3.875rem)', '116%'],
                'h1-md': ['clamp(2.625rem, 3vw + 1.6rem, 3.875rem)', '113%'],
                'h1-lg': ['clamp(3.875rem, 5vw, 4.5rem)', '113%'],
                'h1-xl': ['clamp(4.5rem, 5vw, 9rem)', '111%'],
                'h1-ul': ['9rem', '111%'],
                // H2 (XS, SM-MD(from small to medium), LG, XL)
                'h2-xs': ['1.75rem', '136%'],
                'h2-sm': ['clamp(1.75rem, 1vw + 1.375rem, 2.125rem)', '122%'],
                'h2-md': ['clamp(1.75rem, 1vw + 1.375rem, 2.125rem)', '127%'],
                'h2-lg': ['clamp(2.125rem, 3vw - 0.19rem, 2.5rem)', '123%'],
                'h2-xl': ['clamp(2.5rem, 2.8vw, 5rem)', '125%'],
                'h2-ul': ['5rem', '125%'],
                // H3 (XS, SM-MD (from small to medium), LG, XL)
                'h3-xs': ['1.313rem', '133%'],
                'h3-sm': ['clamp(1.313rem, 1.1vw + 0.9rem, 1.75rem)', '141%'],
                'h3-md': ['clamp(1.313rem, 1.1vw + 0.9rem, 1.75rem)', '141%'],
                'h3-lg': ['clamp(1.75rem, 2vw + 0.188rem, 2rem)', '136%'],
                'h3-xl': ['clamp(2rem, 2.2vw, 4rem)', '131%'],
                'h3-ul': ['4rem', '131%'],
                // H4 (XS-SM-MD(from extra-small to medium), LG, XL)
                'h4-xs-sm-md': ['1.125rem', '156%'],
                'h4-lg': ['1.5rem', '142%'],
                'h4-xl': ['clamp(1.5rem, 1.6vw , 3rem)', '142%'],
                'h4-ul': ['3rem', '142%'],
                // H5 (XS, SM-MD (from small to medium), LG, XL)
                'h5-xs': ['1rem', '150%'],
                'h5-sm': ['1rem', '150%'],
                'h5-md': ['1rem', '150%'],
                'h5-lg': ['1.125rem', '156%'],
                'h5-xl': ['clamp(1.125rem, 1.25vw, 2.25rem)', '156%'],
                'h5-ul': ['2.25rem', '156%'],
                // H6 (XS, SM-MD (from small to medium), LG, XL)
                'h6-xs': [
                    '0.875rem',
                    {
                        lineHeight: '157%',
                        letterSpacing: '0.14px',
                    },
                ],
                'h6-sm': [
                    '0.875rem',
                    {
                        lineHeight: '143%',
                        letterSpacing: '0.14px',
                    },
                ],
                'h6-md': [
                    '0.875rem',
                    {
                        lineHeight: '157%',
                        letterSpacing: '0.14px',
                    },
                ],
                'h6-lg': ['1rem', '150%'],
                'h6-xl': ['clamp(1rem, 1.1vw, 2rem)', '150%'],
                'h6-ul': ['2rem', '150%'],
                // DISPLAY LARGE TEXT
                'display-large-xs': [
                    'clamp(3.75rem, 3.75rem + 3.33vw, 5rem)',
                    '1',
                ],
                'display-large-sm': [
                    'clamp(5rem, 0.06rem + 13.15vw, 7.5rem)',
                    '1',
                ],
                'display-large-md': [
                    'clamp(5.875rem, -0.22rem + 10.7vw, 8.125rem)',
                    '1',
                ],
                'display-large-lg': [
                    'clamp(7.5rem, -4.18rem + 15.07vw, 9.375rem)',
                    '1',
                ],
                'display-large-xl': [
                    'clamp(9.375rem, -0.06rem + 10.42vw, 18.75rem)',
                    '1',
                ],
                'display-large-ul': ['18.75rem', '1'],
                // DISPLAY NORMAL TEXT
                'display-normal-xs': [
                    'clamp(2.25rem, 2.25rem + 1vw, 2.625rem)',
                    '119%',
                ],
                'display-normal-sm': [
                    'clamp(2.625rem, 0.15rem + 6.57vw, 3.875rem)',
                    '119%',
                ],
                'display-normal-md': [
                    'clamp(2.625rem, -0.76rem + 5.98vw, 3.875rem)',
                    '111%',
                ],
                'display-normal-lg': [
                    'clamp(3.875rem, -0.019rem + 5.02vw, 4.5rem)',
                    '111%',
                ],
                'display-normal-xl': [
                    'clamp(4.5rem, -0.003rem + 5.003vw, 9rem)',
                    '111%',
                ],
                'display-normal-ul': ['9rem', '1'],
                // BODY TEXT LARGE
                'body-large-xl': ['clamp(1.125rem, 1.25vw, 2.25rem)', '156%'],
                'body-large-ul': ['2.25rem', '156%'],
                // BODY TEXT MEDIUM
                'body-medium-xl': [
                    'clamp(1rem, -0.624rem + 1.80vw, 2.625rem)',
                    '156%',
                ],
                'body-medium-ul': ['2.625rem', '156%'],
                // BODY TEXT SMALL
                'body-small-xl': [
                    'clamp(0.875rem, 0.97vw, 1.75rem)',
                    {
                        lineHeight: '157%',
                        letterSpacing: '0.14px',
                    },
                ],
                'body-small-ul': ['1.75rem', '157%'],
                // LABEL TEXT EXTRA LARGE
                'label-extra-large-xl': ['clamp(1.5rem, 1.66vw, 3rem)', '150%'],
                'label-extra-large-ul': ['3rem', '150%'],
                // LABEL TEXT LARGE
                'label-large-xl': [
                    'clamp(1.125rem, 1.25vw, 2.25rem)',
                    {
                        lineHeight: '133%',
                        letterSpacing: '0.09px',
                    },
                ],
                // LABEL TEXT MEDIUM
                'label-medium-xl': ['clamp(1.125rem, 1.11vw, 2.25rem)', '125%'],
                'label-medium-ul': ['2rem', '125%'],
                // LABEL TEXT SMALL UPPERCASE
                'label-small-upp-xs': [
                    '0.75rem',
                    {
                        lineHeight: '117%',
                        letterSpacing: '0.06rem',
                    },
                ],
                'label-small-upp-sm-md': [
                    '0.75rem',
                    {
                        lineHeight: '133%',
                        letterSpacing: '0.06rem',
                    },
                ],
                'label-small-upp-lg': [
                    '0.875rem',
                    {
                        lineHeight: '142%',
                        letterSpacing: '0.07rem',
                    },
                ],
                'label-small-upp-xl': [
                    'clamp(0.875rem, 0.97vw, 1.75rem)',
                    {
                        lineHeight: '148%',
                        letterSpacing: '0.07rem',
                    },
                ],
                'label-small-upp-ul': ['1.75rem', '148%'],
                // LABEL TEXT SMALL
                'label-small-xs-sm-md-lg': [
                    '0.875rem',
                    {
                        lineHeight: '129%',
                        letterSpacing: '0.00875',
                    },
                ],
                'label-small-xl': [
                    'clamp(0.875rem, 0.97vw, 1.75rem)',
                    {
                        lineHeight: '157%',
                        letterSpacing: '0.14px',
                    },
                ],
                'label-small-ul': [
                    '1.75rem',
                    {
                        lineHeight: '157%',
                        letterSpacing: '0.14px',
                    },
                ],
                // LABEL TEXT EXTRA SMALL,
                'label-extra-small-xl': 'clamp(0.75rem, 0.83vw, 1.5rem)',
                //QUOTES
                'quotes-xs': ['1.75rem', '136%'],
                'quotes-sm-md': [
                    'clamp(1.75rem, 1rem + 1.97vw, 2.125rem)',
                    '133%',
                ],
                'quotes-lg': [
                    'clamp(2.125rem, -0.21rem + 3.01vw, 2.5rem)',
                    {
                        lineHeight: '133%',
                        letterSpacing: '0.24px',
                    },
                ],
                'quotes-xl': ['clamp(2.5rem, 2.77vw, 5rem)', '125%'],
                'quotes-ul': ['5rem', '125%'],
                // TITLE
                'title-xs-sm-md': ['1.125rem', '141%'],
                'title-lg': ['1.313rem', '143%'],
                'title-xl': ['clamp(1.75rem, 1.94vw, 3.5rem)', '143%'],
                'title-ul': ['3.5rem', '143%'],
                // PROMOTION
                'promotion-xs': [
                    'clamp(2.5rem, 14.3vw - 0.8rem, 4.5rem)',
                    '104%',
                ],
                'promotion-sm': ['clamp(4.5rem, 12.5vw, 6.875rem)', '1'],
                'promotion-md': ['clamp(4rem, 6.58vw, 5.375rem)', '1'],
                'promotion-lg': ['clamp(5.375rem, 7.03vw, 6.25rem)', '1'],
                'promotion-xl': ['clamp(6.25rem, 6.94vw, 12.5rem)', '1'],
                'promotion-ul': ['12.5rem', '1'],
            },
            fontFamily: {
                sans: ['Noto Sans', 'sans-serif'],
            },
        },
        colors: {
            //PRIMARY COLORS
            primary: {
                //GREEN AND JADE-100 USING ALSO FOR ACTION COLORS AND ACCENT COLORS
                green: '#00893D',
                jade: {
                    100: '#73B281',
                },
                //SOFT-BLACK, WHITE, CARBON-GREY (10,20,80,100) USING FOR TYPOGRAPHY
                white: '#FFF',
                'soft-black': '#2C2C2C',
                black: '#000',
                'carbon-grey': {
                    10: '#F4F4F4', //<- MAINLY FOR TYPOGRAPHY
                    20: '#E8E8E8', //<- MAINLY FOR TYPOGRAPHY
                    30: '#D0D0D0',
                    50: '#B8B8B8',
                    60: '#9D9D9D',
                    80: '#828282', //<- MAINLY FOR TYPOGRAPHY
                    100: '#646464', //<- MAINLY FOR TYPOGRAPHY
                },
            },
            secondary: {
                forest: {
                    10: '#E8F0ED',
                    20: '#D2E0DB',
                    30: '#A7C3B9',
                    50: '#7BA697',
                    60: '#4E8C7A',
                    80: '#14735E',
                    100: '#005E46',
                },
                navy: {
                    10: '#E6ECF2',
                    20: '#CED9E3',
                    30: '#A0B6C8',
                    50: '#7395AC',
                    60: '#477791',
                    80: '#145D78',
                    100: '#00445F',
                },
                apple: {
                    10: '#F8FBF4',
                    20: '#F1F6E8',
                    30: '#E2EDD0',
                    50: '#D3E4B6',
                    60: '#C4DB9B',
                    80: '#B2D27E',
                    100: '#A1C861',
                },
                aqua: {
                    10: '#F0F6FA',
                    20: '#E0EDF4',
                    30: '#C1DCE8',
                    50: '#A1CADB',
                    60: '#7FB9CE',
                    80: '#58A8C2',
                    100: '#1C98B5',
                },
                jade: {
                    10: '#F3F7F3',
                    20: '#E7EFE6',
                    30: '#DBE8DA',
                    50: '#C1D8C0',
                    60: '#B2CFB3',
                    80: '#94BF99',
                    100: '#73B281', //<- ALSO USING IT IN PRIMARY COLORS
                },
                pigeon: {
                    10: '#EEF2F4',
                    20: '#DDE6E8',
                    30: '#BDCDD1',
                    50: '#9EB4BA',
                    60: '#7F9CA3',
                    80: '#62858B',
                    100: '#476E75',
                },
            },
            tertiarty: {
                error: '#CB0B15',
                warning: '#E9B300',
                info: '#1C98B5',
                success: '#A1C861',
                'visited-links': '#4C3876',
            },
            transparent: {
                'green-12': '#00893D1F',
                'green-8': '#00893D14',
                'chili-12': '#CB0B151F',
                'chili-8': '#CB0B1514',
                'chili-5': '#CB0B150D',
                'carbon-gray-20': '#64646433',
                'carbon-gray-12': '#6464641F', // <- USING FOR SCAN LINES
                'carbon-gray-8': '#64646414',
                'carbon-gray-5': '#6464640D',
                'white-30': '#FFFFFF4D',
                'white-20': '#FFFFFF26', // <- USING FOR SCAN LINES
                'white-15': '#FFFFFF26',
                'white-10': '#FFFFFF1A',
            },
        },
    },
    plugins: [],
}

export default config
