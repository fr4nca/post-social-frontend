<template>
  <div>
    <h3>Oi</h3>
    <div v-for="post in posts" v-bind:key="post.id">
      {{ post.corpo }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        posts: []
      };
    },
    async created() {
      const data = await fetch("http://localhost:5000/posts", {
        method: "GET"
      });
      const posts = await data.json();
      this.posts = posts;
    }
  };
</script>

<style scoped>
</style>

