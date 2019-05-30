<template>
  <div class="container my-4">
    <h1 class="text-center">Posts</h1>
    <div v-for="post in allPosts" :key="post.id">
      <div class="card my-4">
        <div class="card-header text-center">
          {{ post.titulo }}
        </div>
        <div class="card-body">
          {{ post.corpo }}
        </div>
        <div class="card-footer">
          <div class="text-muted text-right small">
            Escrito por:
            <strong>
              {{ post.user.name }}
            </strong>
            em
            <strong>
              {{ post.created_at }}
            </strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Posts",
    computed: {
      ...mapGetters(["allPosts"])
    },
    methods: {
      ...mapActions(["getAllPosts"])
    },
    created() {
      this.getAllPosts();
    }
  };
</script>

