<template>
  <footer class="footer"
          @mouseover="footerHover(true)"
          @mouseout="footerHover(false)"
          :style="'background-color: ' + footerColor + ';'">
      <nav class="nav">
        <a href="mailto:marcell@studio-seis.at">marcell@studio-seis.at</a>
        <div class="legal-menu">
          <g-link class="nav__link" to="/imprint">.imprint</g-link>
          <g-link class="nav__link" to="/legal">.legal</g-link>
        </div>
      </nav>
    </footer>
</template>

<script>
import Color from '../data/colors.json'
export default {
  data() {
    return {
      colors: Color,
      footerColor: 'transparent',
    }
  },
  computed: {
    colorsObjLength() {
      return Object.keys(this.colors).length
    }
  },
  methods: {
    footerHover(hovered) {
      if (hovered) {
        var randomColorIndex = this.getRandomInt(this.colorsObjLength)
        this.footerColor = Object.values(this.colors)[randomColorIndex]
      }
      else {
        this.footerColor = 'transparent'
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>

<style lang="scss">
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
    border-top: 1px solid;
    .nav {
      color: royalblue;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>