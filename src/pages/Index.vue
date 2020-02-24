<template>
  <Layout>

    <h1>
      <!-- TODO: use Typed.js or vue-typed-js -->
      <vue-typer
      :text='typerTexts'
      :repeat='Infinity'
      :shuffle='false'
      initial-action='erasing'
      :pre-type-delay='50'
      :type-delay='60'
      :pre-erase-delay='2000'
      :erase-delay='250'
      erase-style='select-all'
      :erase-on-complete='false'
      caret-animation='blink'>
      </vue-typer>
      
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
<h2>technologies + programming languages I use:</h2>
<VTextMarquee class="floating-text-banner" :speed="100">
  <ul class="list technologies">
      <li v-for="(name, index) in technologies" :key="index">
        {{name}}
        //
      </li>
    </ul>
</VTextMarquee>

  </Layout>
</template>

<script>
import { VTextMarquee } from 'vue-text-marquee';
import { VueTyper } from 'vue-typer'
export default {
  components: {
    VTextMarquee: VTextMarquee,
    'vue-typer': VueTyper
  },
  data() {
    return {
      typerTexts: [
        "I am a freelance developer ... ",
        "... also looking for work ;)"
      ],
      experiences: [
        'wordpress development',
        'android + iOS app devevelopment',
        'design thinking processes',
        'led mapping & programming',
        'iot solutions with arduino & raspberry pi',
        'amazon alexa skill development',
      ],
      technologies: [
        'html5 + css3 + javascript',
        'php',
        'python',
        'jQuery',
        'php',
        'java',
        'vue.js',
        'react',
        'gridsome',
        'processing',
        'webGL',
        'c++',
      ],
    }
  },
  metaInfo: {
    title: 'Home'
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
  &.technologies {
    li {
      display: inline;
      padding: 12px 0;
      color: #fff;
      background-color: lightseagreen;
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
