<template>
  <div class="layout">
    <header class="header">
      <g-link class="header-logo" to="/">
      {{ $static.metadata.siteName }}
      <div class="profession">
        web-development & -design
      </div>
      </g-link>
      
      <nav class="nav">
        <g-link class="nav__link" to="/">//home</g-link>
        <g-link class="nav__link" to="/works/">//works</g-link>
        <g-link class="nav__link" to="/contact/">//contact</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
    <main class="content">
      
        <slot/>  
      
      
    </main>
    </transition>
    <footer class="footer">
      <nav class="nav">
        <a href="mailto:marcell@studio-seis.at">marcell@studio-seis.at</a>
      </nav>

    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@font-face {
  font-family: JetBrainsMono-Regular;
  src: url('../assets/fonts/JetBrainsMono-Regular.ttf');
  font-weight: normal;
}
@font-face {
  font-family: JetBrainsMono-Bold;
  src: url('../assets/fonts/JetBrainsMono-Bold.ttf');
  font-weight: normal;
}

@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

body {
  font-family: JetBrainsMono-Regular;
  margin: 0;
  .layout {
    position: relative;
    min-height: 97vh;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  margin: 8px;
  border: 5px solid;
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
    a:visited {
      color:turquoise;
    }
    .nav__link.active--exact.active {
      color: red;
    }
  }
}
.content {
  margin: 8px;
  border: 1px dashed;
  min-height: 80vh;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid;
  .nav {
    color: royalblue;
  }
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>
