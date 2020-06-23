<template lang="pug">
  section
    div
      a(v-for='(project, i) in projects', :key='i', :href='"https://"+project.href+".iamjoberror.com"', :title='project.desc')
        ul
          li(:class='project.class')
            component(:is='project.svg')
          li(v-html='project.title')
          li {{project.desc}}

</template>

<script>
import viconSVG from "~/assets/svg/visual-icons.svg?inline";
import bootSVG from "~/assets/svg/bootstrap.svg?inline";
import textSVG from "~/assets/svg/textarea.svg?inline";

export default {
  name: "work",
  head() {
    return {
      title: "= My Works"
    };
  },
  components: {
    viconSVG,
    bootSVG,
    textSVG
  },
  data() {
    return {
      projects: [
        {
          href: "t-area",
          title: "Textarea <i>L</i>imiter",
          svg: "textSVG",
          class: "text-limiter",
          desc: "Limit and filter HTML Textarea input."
        },
        {
          href: "t-boot",
          title: "Twig <i>B</i>ootstrap",
          svg: "bootSVG",
          class: "bootstrap",
          desc: "PHP Twig bootstrap with Gulp."
        },
        {
          href: "v-icons",
          title: "Visual <i>I</i>cons",
          svg: "viconSVG",
          class: "visual-icons",
          desc: "Curative SVG icons for web developers."
        }
      ]
    };
  }
};

</script>

<style lang='scss' scoped>
@import '~assets/sass/work';
</style>