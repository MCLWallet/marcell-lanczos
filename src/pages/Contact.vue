<template>
  <Layout>
    <h1>Contact me:</h1>
    <ContactForm/>
    <v-dialog/>
  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'
export default {
  components: {
    ContactForm
  },
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style lang="scss">
.v--modal {
  border: 4px dashed #000;
}
.vue-dialog .vue-dialog-buttons {
  border-top: 2px dashed #000;
  button {
    &:hover {
      background: tomato;
    }
  }
}
</style>