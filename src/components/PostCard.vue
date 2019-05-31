<template>
  <div>
    <div class="card my-4">
      <div class="card-header text-center">{{ this.post.titulo }}</div>
      <div class="card-body">{{ this.post.corpo }}</div>
      <div class="card-footer">
        <div class="text-muted float-left small">
          Escrito por:
          <strong>{{ this.post.user.name }}</strong>
          em
          <strong>{{ this.post.created_at }}</strong>
        </div>
        <button
          @click="deletePost(post.id)"
          v-if="this.post.user.id == user.id"
          class="float-right btn btn-sm btn-danger"
        >x</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostCard",
  props: {
    post: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["deletePost"])
  }
};
</script>

<style scoped>
</style>

