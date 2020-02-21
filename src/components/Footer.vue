<template>
  <footer class="footer">
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
export default {

}
</script>

<style lang="scss">
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid;
    .nav {
      color: royalblue;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>