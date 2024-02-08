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
            },
            fontSize: {
                // H1 (XS, SM-MD (from small to medium), LG, XL)
                'h1-xs': 'clamp(2.25rem, 1vw + 2.25rem, 2.625rem)',
                'h1-sm-md': 'clamp(2.625rem, 3vw + 1.6rem, 3.875rem)',
                'h1-lg': 'clamp(3.875rem, 5vw, 4.5rem)',
                'h1-xl': 'clamp(4.5rem, 5vw, 9rem)',
                'h1-ul': '9rem',
                // H2 (XS, SM-MD(from small to medium), LG, XL)
                'h2-xs': '1.75rem',
                'h2-sm-md': 'clamp(1.75rem, 1vw + 1.375rem, 2.125rem)',
                'h2-lg': 'clamp(2.125rem, 3vw - 0.19rem, 2.5rem)',
                'h2-xl': 'clamp(2.5rem, 2.8vw, 5rem)',
                'h2-ul': '5rem',
                // H3 (XS, SM-MD (from small to medium), LG, XL)
                'h3-xs': '1.313rem',
                'h3-sm-md': 'clamp(1.313rem, 1.1vw + 0.9rem, 1.75rem)',
                'h3-lg': 'clamp(1.75rem, 2vw + 0.188rem, 2rem)',
                'h3-xl': 'clamp(2rem, 2.2vw, 4rem)',
                'h3-ul': '4rem',
                // H4 (XS, SM-MD(from small to medium), LG, XL)
                'h4-xs-sm-md': '1.125rem',
                'h4-lg': '1.5rem',
                'h4-xl': 'clamp(1.5rem, 1.6vw , 3rem)',
                'h4-ul': '3rem',
                // H5 (XS, SM-MD (from small to medium), LG, XL)
                'h5-xs-sm-md': '1rem',
                'h5-lg': '1.125rem',
                'h5-xl': 'clamp(1.125rem, 1.25vw, 2.25rem)',
                'h5-ul': '2.25rem',
                // H6 (XS, SM-MD (from small to medium), LG, XL)
                'h6-xs-sm-md': '0.875rem',
                'h6-lg': '1rem',
                'h6-xl': 'clamp(1rem, 1.1vw, 2rem)',
                'h6-ul': '2rem',
                // DISPLAY LARGE TEXT
                'display-large-xs': [
                    'clamp(3.75rem, 3.75rem + 3.33vw, 5rem)',
                    '1.5',
                ],
                'display-large-sm': [
                    'clamp(5rem, 0.06rem + 13.15vw, 7.5rem)',
                    '1.5',
                ],
                'display-large-md': [
                    'clamp(5.875rem, -0.22rem + 10.7vw, 8.125rem)',
                    '1.5',
                ],
                'display-large-lg': [
                    'clamp(7.5rem, -4.18rem + 15.07vw, 9.375rem)',
                    '1.5',
                ],
                'display-large-xl': [
                    'clamp(9.375rem, -0.06rem + 10.42vw, 18.75rem)',
                    '1.5',
                ],
                'display-large-ul': ['18.75rem', '1.5'],
                // DISPLAY NORMAL TEXT
                'display-normal-xs': [
                    'clamp(2.25rem, 2.25rem + 1vw, 2.625rem)',
                    '1.5',
                ],
                'display-normal-sm': [
                    'clamp(2.625rem, 0.15rem + 6.57vw, 3.875rem)',
                    '1.5',
                ],
                'display-normal-md': [
                    'clamp(2.625rem, -0.76rem + 5.98vw, 3.875rem)',
                    '1.5',
                ],
                'display-normal-lg': [
                    'clamp(3.875rem, -0.019rem + 5.02vw, 4.5rem)',
                    '1.5',
                ],
                'display-normal-xl': [
                    'clamp(4.5rem, -0.003rem + 5.003vw, 9rem)',
                    '1.5',
                ],
                'display-normal-ul': ['9rem', '1.5'],
                // BODY TEXT BASE
                'body-base-xl': [
                    'clamp(1.125rem, 1.25vw, 2.25rem)',
                    'clamp(1.75rem, 1.25vw, 2.5rem)',
                ],
                // BODY TEXT MEDIUM
                'body-medium-xl': [
                    'clamp(1rem, -0.624rem + 1.80vw, 2.625rem)',
                    'clamp(1.5rem, 0.125rem + 1.52vw, 2.875rem)',
                ],
                'body-medium-ul': ['2.625rem', '2.875rem'],
                // BODY TEXT SMALL
                'body-small-xl': [
                    'clamp(0.875rem, 0.97vw, 1.75rem)',
                    'clamp(1.25rem, 0.375rem + 0.97vw, 2.125rem)',
                ],
                'body-small-ul': ['1.75rem', '2.125rem'],
                // LABEL TEXT EXTRA LARGE
                'label-extra-large-xl': [
                    'clamp(1.5rem, 1.66vw, 3rem)',
                    'clamp(3rem, 0.99rem + 1.11vw, 3rem)',
                ],
                // LABEL TEXT LARGE
                'label-large-xl': [
                    'clamp(1.125rem, 1.25vw, 2.25rem)',
                    'clamp(1.75rem, 0.99rem + 0.83vw, 2.5rem)',
                ],
                // LABEL TEXT MEDIUM
                'label-medium-xl': [
                    'clamp(1.125rem, 1.11vw, 2.25rem)',
                    'clamp(1.5rem, 0.62rem + 0.97vw, 2.375rem)',
                ],
                'label-medium-ul': ['2rem', '2.375rem'],
                // LABEL TEXT SMALL
                'label-small-xl': [
                    'clamp(0.875rem, 0.97vw, 1.75rem)',
                    'clamp(1.25rem, 0.37rem + 0.97vw, 2.125rem)',
                ],
                'label-small-ul': ['1.75rem', '2.125rem'],
                // LABEL TEXT EXTRA SMALL
                'label-extra-small-xl': [
                    'clamp(0.75rem, 0.83vw, 1.5rem)',
                    'clamp(1rem, 1.11vw, 2rem)',
                ],
                //QUOTES
                'quotes-xs': ['1.75rem', '2.125rem'],
                'quotes-sm-md': [
                    'clamp(1.75rem, 1rem + 1.97vw, 2.125rem)',
                    'clamp(2.125rem, 1.63rem + 1.31vw, 2.375rem)',
                ],
                'quotes-lg': [
                    'clamp(2.125rem, -0.21rem + 3.01vw, 2.5rem)',
                    'clamp(2.375rem, 0.42rem + 2.51vw, 2.688rem)',
                ],
                'quotes-xl': [
                    'clamp(2.5rem, 2.77vw, 5rem)',
                    'clamp(2.688rem, 0.37rem + 2.57vw, 5rem)',
                ],
                'quotes-ul': ['5rem', '1.5'],
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
