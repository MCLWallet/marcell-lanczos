<template>
  <Layout>
    <h1>Some projects I did</h1>
    <ul class="list">
      <li v-for="(project, index) in projects" :key="index">
        {{project.name}}: <a :href="project.url" target="_blank">Link</a>
        <ul class="details">
          <li>Year: {{project.year}}</li>
          <li>Design: {{project.design}}</li>
          <li>Technologies: {{project.technologies}}</li>
        </ul>
        <br>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Polarstern",
          url:"https://www.polarstern.me/",
          year: "2019 - today",
          design: "UXilize, Studio Seis",
          technologies: ['storyblok', 'netlify CMS' , 'vue.js', 'node.js', 'gridsome']
        },
        {
          name: "Geld Magazin",
          url:"https://www.geld-magazin.at/",
          year: "2020",
          design: "Nadine Werjant",
          technologies: ['wordpress', 'php', 'vue.js', 'vanilla JS']
        },
        {
          name: "Club of Vienna",
          url:"http://www.clubofvienna.org/",
          year: "2019",
          design: "Nadine Werjant",
          technologies: ['wordpress', 'php', 'vanilla JS']
        },
        
      ]
    }
  },
  metaInfo: {
    title: 'Works'
  }
}
</script>

<style lang="scss">
.list {
  margin: 0 2.2em;
  list-style: decimal-leading-zero;
  .details {
    list-style-type: lower-alpha;
  }
}
</style>