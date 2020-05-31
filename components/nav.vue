<template lang='pug'>
    nav
        ul.menu
            li.menu-item(v-for='(menu, i) in menus')
                a.menu-link(:href='menu.href', :title='menu.title', :data-content='menu.content') {{menu.content}}
        ul.social
            li(v-for='(link, i) in extLink')
              a
                component(:is='link.svg')(:class='link.class')
              
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
        { svg: "TwitterSVG", href: "", class: "svg-twitter" },
        { svg: "InstagramSVG", href: "", class: "svg-instagram" }
      ],
      menus: [
        { href: "/", title: "Go to Home page", content: "Home" },
        { href: "/about/", title: "Who am I?", content: "About" },
        { href: "/work/", title: "My Works", content: "Work" }
      ]
    };
  },
  mounted() {
    this.$currentMenu("menu-item-current");
  }
};
</script>
