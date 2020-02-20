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
<ul class="list">
  <li v-for="(name, index) in experiences" :key="index">
    {{name}}
  </li>
</ul>

  </Layout>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
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

<style>
.home-links a {
  margin-right: 1rem;
}
.list {
  list-style: circle;
}
.vue-typer .custom.char {
  color: #D4D4BD;
  background-color: #1E1E1E;
}
.vue-typer .custom.char.selected {
  background-color: #264F78;
}
</style>
