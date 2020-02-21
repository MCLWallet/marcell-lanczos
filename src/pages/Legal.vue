<template>
  <Layout>
    <h1>Some projects I did</h1>
    <ul class="list">
      <li v-for="(project, index) in projects" :key="index">
        {{project.name}}: <a :href="project.url">Link</a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {name: "Club of Vienna", url:"http://www.clubofvienna.org/"},
        {name: "Polarstern", url:"https://www.polarstern.me/"},
        
      ]
    }
  },
  metaInfo: {
    title: 'Works'
  }
}
</script>
