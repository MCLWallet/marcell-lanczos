<template>
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
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="scss">
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
  }
}
</style>