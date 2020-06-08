<template lang="pug">
    section
        div
            p #[em.cl-color-white Hi!] #[span They call me] #[em.cl-color-white Joberror]#[span ,] #[br] #[span a solution getter through] #[br] #[em.cl-color-code.cl-text-u-line #codes] #[span &] #[em.cl-color-design.cl-text-u-line #designs]#[span .]
            ul
                li #[hr.cl-hr-vertical]
                li.cl-color-project New Project:
                li
                    a.cl-trans-hov-color(title='Visual Icons just got released', href='https://vicons.iamjoberror.com/').cl-link-out Visual Icons 1.0 is out

</template>

<script>
export default {
  name: "index",
  head() {
    return {
      title: "= Home"
    };
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
@import '~assets/sass/home'
</style>
