<template>
  <div>
    <div class="card my-4">
      <div class="card-header text-center">{{ this.post.titulo }}</div>
      <div class="card-body">{{ this.post.corpo }}</div>
      <div class="card-footer">
        <div class="text-muted text-right small">
          Escrito por:
          <strong>{{ this.post.user.name }}</strong>
          em
          <strong>{{ this.post.created_at }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>

