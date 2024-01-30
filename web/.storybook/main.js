module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: [
        {
            from: '../assets/fonts',
            to: '/fonts',
        },
      '../assets'
    ],
    docs: {
        autodocs: true,
    },
    core: {
        disableTelemetry: true,
    },
}
