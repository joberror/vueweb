<template lang='pug'>
    nav
        ul.menu
            li.menu-item(v-for='(menu, i) in menus')
                a.menu-link(:href='menu.href', :title='menu.title', :data-content='menu.content') {{menu.content}}
        ul.social
            li(v-for='(link, i) in extLink')
              a
                svg(:data-url='link.svg')
              
</template>

<script>

export default {
  data() {
    return {
      extLink: [
        {svg: '/svg/twitter.svg', href: '', class: ''},
        {svg: '/svg/instagram.svg', href: '', class: ''}
      ],
      menus: [
        {href: '/', title: 'Go to Home page', content: 'Home'},
        {href: '/about/', title: 'Who am I?', content: 'About'},
        {href: '/work/', title: 'My Works', content: 'Work'}
      ]
    }
  },
  mounted(){
    this.$currentMenu('menu-item-current');
    this.$svgLoader.init();
  }
}

</script>

<style>

</style>