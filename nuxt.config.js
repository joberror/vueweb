export default {
    target: 'static',

    build: {
        //TODO: change on Production
        analyze: false,
        extractCSS: true,
        devtools: true,

        extend: (config) => {
            const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

            svgRule.test = /\.(png|jpe?g|gif|webp)$/;

            config.module.rules.push({
                test: /\.svg$/,
                use: ['babel-loader', 'vue-svg-loader'],
            });
        },
    },

    plugins: [{
        src: '~plugins/helper'
    }],

    css: [
        '~assets/sass/main.sass'
    ],

    head: {
        meta: [{
                charset: 'UTF'
            },
            {
                name: 'author',
                content: 'Bolarinwa Olakunle'
            },
            {
                name: 'description',
                content: 'A Web Developer and Visual Designer'
            },
            {
                name: 'copyright',
                content: 'Joberror, Copyright - ' + new Date().getFullYear()
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0'
            },
            {
                name: 'rating',
                content: 'General'
            },
            {
                name: 'theme-color',
                content: '#141414'
            },
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black-translucent'
            }
        ],
        link: [{
                rel: 'dns-prefetch',
                href: '//fonts.googleapis.com'
            },
            {
                rel: 'dns-prefetch',
                href: '//storage.googleapis.com'
            },
            {
                rel: 'preconnect',
                href: '//fonts.googleapis.com',
                crossorigin: 'true'
            },
            {
                rel: 'preconnect',
                href: '//storage.googleapis.com',
                crossorigin: 'true'
            },
            {
                rel: 'apple-touch-icon',
                href: '/favicon-195.png'
            },
            {
                rel: 'icon',
                href: '/favicon-32.png',
                sizes: '32x32'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap'
            }
        ]
    }
};