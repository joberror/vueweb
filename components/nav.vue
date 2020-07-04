<template lang="pug">
  nav
    ul.menu
      nuxt-link(v-for='(menu, i) in menus', tag='li' :to='menu.href', :key='menu.content' exact)
        a.menu-link(:title='menu.title', :data-content='menu.content') {{menu.content}}
    ul.social
      li(v-for='(link, i) in extLink')
        a(:href='link.href', :title='link.title')
          component(:is='link.svg', :class='link.class')
</template>

<script>
import TwitterSVG from "~/assets/svg/twitter.svg?inline";
import InstagramSVG from "~/assets/svg/instagram.svg?inline";

export default {
  components: {
    TwitterSVG,
    InstagramSVG
  },

  data() {
    return {
      extLink: [
        {
          svg: "TwitterSVG",
          href: "https://twitter.com/iamjoberror",
          class: "svg-twitter",
          title: "Follow me on Twitter"
        },
        {
          svg: "InstagramSVG",
          href: "https://instagram.com/i.am.joberror",
          class: "svg-instagram",
          title: "Check me out on Instagram"
        }
      ],
      menus: [
        { href: "/", title: "Go to Home page", content: "Home" },
        { href: "/about/", title: "Who am I?", content: "About" },
        { href: "/work/", title: "My Works", content: "Work" }
      ]
    };
  }
};
</script>
