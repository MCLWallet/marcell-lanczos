<template>
  <header class="header">

    <!-- Logo -->
    <div class="logo-wrapper" 
          @mouseover="headerHover(true, 'left')"
          @mouseout="headerHover(false)"
          :style="'background-color: ' + headerLeftColor + ';'">
      <g-link class="header-logo" to="/">
        <div class="name">{{ $static.metadata.siteName }}</div>
        <div class="profession">
          software-development & -design
        </div>
      </g-link>
    </div>

    <!-- Navigation -->
    <div class="nav-wrapper"
          @mouseover="headerHover(true, 'right')"
          @mouseout="headerHover(false)"
          :style="'background-color: ' + headerRightColor + ';'">

      <!-- Burger Button -->
      <button class="burger-button"
              @mousedown="menuActive = !menuActive">
        <g-image v-if="!menuActive" src="~/assets/img/hamburger.png"></g-image>
        <g-image v-if="menuActive" src="~/assets/img/skull.png"></g-image>
      </button>

      <!-- Menu Items -->
      <nav class="nav" :class="{active: menuActive}">
        <g-link class="nav__link" to="/">//home</g-link>
        <a href="https://cv.marcell-lanczos.com/" target="_blank">//cv</a>
        <g-link class="nav__link" to="/works">//works</g-link>
        <g-link class="nav__link" to="/contact">//contact</g-link>
      </nav>

    </div>
    
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
  mounted() {
    document.addEventListener('consentUpdate', this.consentToggle)
  },
  beforeDestroy() {
    document.removeEventListener('consentUpdate', this.consentToggle)
  },
  data() {
    return {
      colors: Color,
      headerLeftColor: '#fff',
      headerRightColor: '#fff',
      menuActive: false
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
    },
    consentToggle(event) {
      // only is app is google analytics
      if (event.detail.app === 'googleAnalytics') {
        if (event.detail.consent) {
          // if user consent is true
          window['ga-disable-G-3R6W056HGY'] = false;
        } else {
          // if user consent is false
          window['ga-disable-G-3R6W056HGY'] = true;
        }
      }
    },
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
    font-family: Linebeam;
    text-decoration: none;
    color: #000;
    // text-transform: lowercase;
    .name {
      font-size: 66px;
      line-height: 1.4em;
    }
    .profession {
      font-family: JetBrainsMono-Regular;
      font-size: 18px;
      color: #009688;
    }
  }
  .nav-wrapper {
    border-left: 5px solid #000;
    display: flex;
    align-items: flex-end;
    color: turquoise;
  }
  .burger-button {
    display: none;
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    img {
      width: 72px;
    }
  }
  @media screen and (max-width: 767px){
    .burger-button {
      display: block;
    }
    nav {
      // display: none;
      position: fixed;
      width: 28%;
      right: -242px;
      border: 5px solid #000;
      top: 105px;
      background-color: #fff;
      transition: .4s ease-in-out;
      border-right: 5px dashed #000;
      border-top: 5px dashed #000;
      z-index: 100;
      a {
        display: block;
        padding: 1em 0;
        border-top: 3px dashed #000;
        &:first-child {
          border-top: none;
        }
      }
      &.active {
        right: 8px;
      }
    }
  }
}

</style>