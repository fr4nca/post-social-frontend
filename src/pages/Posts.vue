<template>
  <div class="container my-4">
    <h1 class="text-center">Posts</h1>
    <div v-for="post in allPosts" :key="post.id">
      <PostCard :post="post"></PostCard>
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts",
  components: {
    PostCard
  },
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

