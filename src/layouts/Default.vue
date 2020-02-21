<template>
  <div class="layout">

    <Header/>

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
import { VTextMarquee } from 'vue-text-marquee';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

body {
  font-family: JetBrainsMono-Regular;
  margin: 0;
  overflow: hidden;
  .layout {
    position: relative;
    min-height: 97vh;
  }
}
.content {
  margin: 8px;
  border: 1px dashed;
  min-height: 80vh;
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
.nav__link.active--exact.active {
  color: red;
}
</style>
