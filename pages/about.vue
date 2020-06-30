<template lang='pug'>
  section
    div
      p I am #[span.cl-color-name Olakunle Bolarinwa] [ #[i.cl-fs-italic nick]: Joberror ], #[br]I am from Nigeria and resides in Lagos. #[br]A graduate of #[a(href='https://www.lasu.edu.ng', title='Lagos State University') LASU] with BSc. Math#[em ematics]. #[br] I am into #[span.cl-color-code Coding] and #[span.cl-color-design Visual Design], PC #[br]Logistics and Management.

      ul
        li
          ul
            li #[span #[codeSVG]] SKILLS
            li PHP #[b .] Js #[b .] HTML5 #[b .] Vue #[b .] Sass #[b .] Git

    div
      ul
        li
          ul
            li #[span #[profileSVG]] PROFILES
            li #[a.cl-color-github.cl-link-out(title='Github profile', href='https://github.com/joberror') Github] #[br] #[a.cl-color-stack.cl-link-out(href='https://stackoverflow.com/users/245030/joberror', title='Stackoverflow profile') Stackoverflow] #[br] #[a.cl-color-dribbble.cl-link-out(title='Dribbble profile', href='https://dribbble.com/joberror') Dribbble] #[br] #[a.cl-color-linkedin.cl-link-out(href='https://www.linkedin.com/in/joberror/', title='LinkedIn profile') LinkedIn]
      ul
        li
          ul
            li #[span #[toolsSVG]] TOOLS
            li Visual Studio Code #[br] Photoshop & Illustrator #[br] Webstorm & Phpstorm
</template>

<script>
import codeSVG from "~/assets/svg/code.svg?inline";
import profileSVG from "~/assets/svg/profile.svg?inline";
import toolsSVG from "~/assets/svg/tools.svg?inline";

export default {
  name: "about",
  head() {
    return {
      title: "= About Me"
    };
  },
  components: {
    codeSVG,
    profileSVG,
    toolsSVG
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
@import "~assets/sass/about";
</style>