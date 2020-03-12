<template>
  <Layout>

    <ClientOnly>
      <vue-typed 
        :strings="typerTexts"
        :loop="true"
        :typeSpeed="50"
        :backSpeed="50"
        :smartBackspace="false"
        :showCursor="false">
        <h1 class="typing"></h1>
      </vue-typed>
    </ClientOnly>
    

<h2>experienced in:</h2>
<ClientOnly>
<VTextMarquee class="floating-text-banner" :speed="100">
<ul class="list experiences">
    <li v-for="(name, index) in experiences" :key="index">
      {{name}}
      //
    </li>
  </ul>
</VTextMarquee>

</ClientOnly>


<h2>technologies + programming languages I use:</h2>
<ClientOnly>
  <VTextMarquee class="floating-text-banner" :speed="100">
    <ul class="list technologies">
        <li v-for="(name, index) in technologies" :key="index">
          {{name}}
          //
        </li>
      </ul>
    </VTextMarquee>
</ClientOnly>

  </Layout>
</template>

<script>
import { VTextMarquee } from 'vue-text-marquee';
import { VueTypedJs } from 'vue-typed-js'
export default {
  components: {
    VTextMarquee: VTextMarquee,
    'vue-typed': VueTypedJs
  },
  data() {
    return {
      typerTexts: [
        "I am a freelance developer ... ",
        "... nice to meet you ;)",
        " ",
      ],
      experiences: [
        'wordpress',
        'shopify',
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
        'java',
        'vue.js',
        'react',
        'gridsome',
        'graphQL',
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
.typed-element {
  height: 200px;
  margin: 2em 0;
  h1 {
    color: #fff;
  background-color: #1E1E1E;
  }
}

// Animations
.floating-text-banner {
  margin-right: -13px;
  margin-left: -13px;
  z-index: 90;
}
.running:hover {
  animation-play-state: paused !important;
}
</style>
