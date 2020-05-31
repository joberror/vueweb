<template lang='pug'>
    nav
        ul.menu
            li.menu-item
                a.menu-link(href='/', title="Homepage", data-content="Home") Home
            li.menu-item
                a.menu-link(href='/about/', title="Who am I?", data-content="About") About
            li.menu-item
                a.menu-link(href='/work/', title="My works", data-content="Work") Work
</template>

<script>

export default {
  mounted(){
    this.$currentMenu('menu-item-current')
  }
}

</script>

<style>

</style>