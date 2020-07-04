<template lang="pug">
main
  Navigation
  section
    div
      p #[em.cl-color-white Hi!] #[span They call me] #[em.cl-color-white Joberror]#[span ,] #[br] #[span a solution getter through] #[br] #[em.cl-color-code.cl-text-u-line #codes] #[span &] #[em.cl-color-design.cl-text-u-line #designs]#[span .]
      ul
        li #[hr.cl-hr-vertical]
        li.cl-color-project Current project:
        li
          a.cl-trans-hov-color(title='Visual Icons just got released', href='https://vis-icons.iamjoberror.com/').cl-link-out Visual Icons v1.1.
</template>

<script>
import Navigation from '@/components/nav.vue';

export default {
  name: "index",
  head() {
    return {
      title: "= Home"
    };
  },
  components: {
    Navigation
  }
};
</script>
<style lang='scss' scoped>
@import '~assets/sass/home'
</style>
