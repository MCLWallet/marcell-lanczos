<template>
  <Layout>
    <h1>Contact me:</h1>
    <ContactForm/>
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
