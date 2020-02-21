<template>
  <Layout>

    <h1>
      <vue-typer
        :text='["I am a freelance web developer ... ", "... also looking for work ;)"]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='erasing'
        :pre-type-delay='50'
        :type-delay='60'
        :pre-erase-delay='2000'
        :erase-delay='250'
        erase-style='select-all'
        :erase-on-complete='false'
        caret-animation='blink'
      ></vue-typer>
</h1>

<h2>experienced in:</h2>
<VTextMarquee class="floating-text-banner" :speed="100">
  <ul class="list experiences">
      <li v-for="(name, index) in experiences" :key="index">
        {{name}}
        //
      </li>
    </ul>
</VTextMarquee>


  </Layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import { VTextMarquee } from 'vue-text-marquee';

export default {
  components: {
    VueTyper,
    VTextMarquee: VTextMarquee
  },
  data() {
    return {
      experiences: [
        'wordpress development',
        'javascript',
        'php',
        'python',
        'jQuery',
        'php',
        'react',
        'vue.js',
      ]
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
.list {
  list-style: circle;
  &.experiences {
    li {
      display: inline;
      padding: 12px 0;
      color: #fff;
      background-color: blue;
    }
  }
  
}
.vue-typer .custom.char {
  color: #D4D4BD;
  background-color: #1E1E1E;
}
.vue-typer .custom.char.selected {
  background-color: #264F78;
}

// Animations
.floating-text-banner {
  margin-right: -10px;
  margin-left: -10px;
}
.running:hover {
  animation-play-state: paused !important;
}
</style>
