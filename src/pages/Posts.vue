<template>
  <div class="container my-4">
    <button
      v-if="isAuthenticated"
      @click="toggleAdd"
      class="btn btn-secondary btn-small float-right"
    >
      Criar postagem
    </button>
    <h1>Posts</h1>
    <AddPost @toggleadd="toggleAdd" v-if="isCreating" />
    <div v-for="post in allPosts" :key="post.id">
      <PostCard :post="post"></PostCard>
    </div>
    <div v-if="!allPosts">
      Loading..
    </div>
    <div class="lead" v-if="allPosts.length == 0">
      Seja o primeiro a postar :D
    </div>
  </div>
</template>

<script>
  import PostCard from "../components/PostCard";
  import AddPost from "../components/AddPost";
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Posts",
    data() {
      return {
        isCreating: false
      };
    },
    components: {
      PostCard,
      AddPost
    },
    computed: {
      ...mapGetters(["allPosts", "isAuthenticated"])
    },
    methods: {
      ...mapActions(["getAllPosts"]),
      toggleAdd() {
        this.isCreating = !this.isCreating;
      }
    },
    created() {
      this.getAllPosts();
    }
  };
</script>

