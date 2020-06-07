export default {
    build: {
        //TODO: change on Production
        analyze: true,
        extractCSS: true,
        devtools: true
    },
    buildModules: [
        'nuxt-purgecss'
    ],
    plugins: [{
        src: '~plugins/main'
    }],
    modules: [
        '@nuxtjs/svg',
        [
            "nuxt-compress",
            {
                gzip: {
                    cache: true
                },
                brotli: {
                    threshold: 10240
                }
            }
        ]
    ],
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
                rel: 'rel',
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