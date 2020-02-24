// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import Layout
import DefaultLayout from '~/layouts/Default.vue'

// Import Styles
import '~/assets/scss/fonts.scss'

// Import Libraries
import VTextMarquee from 'vue-text-marquee';
import VueTyper from 'vue-typer'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VTextMarquee);
  Vue.use(VueTyper);
}
