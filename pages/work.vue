<template lang="pug">
main
  Navigation
  section
    div
      a(v-for='(project, i) in projects', :key='i', :href='project.href', :title='project.desc')
        ul
          li()
            span
              component(:is='project.svg', :class='project.class')
          li(v-html='project.title')
          li {{project.desc}}
</template>

<script>
import Navigation from '@/components/nav.vue';
import viconSVG from "~/assets/svg/emoji.svg?inline";
import bootSVG from "~/assets/svg/code-twig.svg?inline";
import textSVG from "~/assets/svg/text-area.svg?inline";

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
    textSVG,
    Navigation
  },
  data() {
    return {
      projects: [
        {
          href: "https://ta-limit.iamjoberror.com",
          title: "Textarea <i>L</i>imiter",
          svg: "textSVG",
          class: "text-area",
          desc: "Limit and filter HTML Textarea input."
        },
        {
          href: "https://github.com/joberror/twig-bootstrap",
          title: "Twig <i>B</i>ootstrap",
          svg: "bootSVG",
          class: "twig-bootstrap",
          desc: "PHP Twig bootstrap with Gulp."
        },
        {
          href: "https://vis-icons.iamjoberror.com",
          title: "Visual <i>I</i>cons",
          svg: "viconSVG",
          class: "visual-icons",
          desc: "Tasty SVG icons for web developers."
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
@import "~assets/sass/work";
</style>