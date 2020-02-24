<template>
  <header class="header">
    <div class="logo-wrapper" 
          @mouseover="headerHover(true, 'left')"
          @mouseout="headerHover(false)"
          :style="'background-color: ' + headerLeftColor + ';'">
      <g-link class="header-logo" to="/">
        {{ $static.metadata.siteName }}
        <div class="profession">
          software-development & -design
        </div>
      </g-link>
    </div>
    <nav class="nav"
          @mouseover="headerHover(true, 'right')"
          @mouseout="headerHover(false)"
          :style="'background-color: ' + headerRightColor + ';'">
      <g-link class="nav__link" to="/">//home</g-link>
      <g-link class="nav__link" to="/works">//works</g-link>
      <g-link class="nav__link" to="/contact">//contact</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Color from '../data/colors.json'
export default {
  data() {
    return {
      colors: Color,
      headerLeftColor: '#fff',
      headerRightColor: '#fff'
    }
  },
  computed: {
    colorsObjLength() {
      return Object.keys(this.colors).length
    }
  },
  methods: {
    headerHover(hovered, location) {
      if (hovered) {
        var randomColorIndex = this.getRandomInt(this.colorsObjLength)
        if (location == 'left') {
          this.headerLeftColor = Object.values(this.colors)[randomColorIndex]
        }
        else if (location == 'right') {
          this.headerRightColor = Object.values(this.colors)[randomColorIndex]
        }
      }
      else {
        this.headerLeftColor = '#fff'
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin: 8px;
  border: 5px solid;
  .logo-wrapper {
    width: 100%;
  }
  .header-logo {
    font-family: 'Ubuntu', sans-serif;
    text-decoration: none;
    font-size: 38px;
    color: #000;
    // text-transform: lowercase;
    .profession {
      font-family: JetBrainsMono-Regular;
      font-size: 18px;
      color: #009688;
    }
  }
  .nav {
    border-left: 5px solid #000;
    display: flex;
    align-items: flex-end;
    color: turquoise;
  }
}
</style>