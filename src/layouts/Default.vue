<template>
  <div class="layout">

    <Header />

    <transition name="fade" appear>
      <main class="content">
          <slot/>  
      </main>
      </transition>

    <Footer/>

  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Colors from '../data/colors.json'

export default {
  data() {
    return {
      webColors: Colors,
      currentColors: [
        {headerLeft: '#fff'},
        {headerRight: '#fff'},
        {content: '#fff'},
        {footer: '#fff'},
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    changeBackgroundColor(location) {
      switch (location) {
        case 'header-left':
          
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>

<style lang="scss">

body {
  font-family: JetBrainsMono-Regular;
  margin: 0;
  // overflow: hidden;
  cursor: url(../assets/img/cursor.png);
  .layout {
    position: relative;
    min-height: 97vh;
  }
}
.content {
  margin: 8px;
  border: 5px dashed;
  min-height: 85vh;
}

.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
a:visited {
  color:turquoise;
}
nav {
  a:hover {
    text-transform: uppercase;
    font-size: 18px;
  }
}
.nav__link.active--exact.active {
  color: red;
  text-transform: uppercase;
  font-size: 18px;
}
@media screen and (max-width: 767px){
  
}
</style>
