<template>
  <div>
    <div class="card my-4">
      <div class="card-header text-center">Criar postagem</div>
      <div class="card-body">
        <form @submit.prevent="submitPost">
          <div class="form-group">
            <input
              type="text"
              v-model="titulo"
              name="titulo"
              class="form-control"
              placeholder="Digite o título aqui"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              required
              name="corpo"
              v-model="corpo"
              type="text"
              class="form-control"
              placeholder="Digite seu texto aqui"
            />
          </div>
          <input
            type="submit"
            value="Criar"
            class="btn btn-secondary btn-block"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "AddPost",
    data() {
      return {
        corpo: "",
        titulo: ""
      };
    },
    computed: {
      ...mapGetters(["user"])
    },
    methods: {
      ...mapActions(["addPost"]),
      submitPost() {
        const newPost = {
          corpo: this.corpo,
          titulo: this.titulo,
          tb_user_id: this.user.id
        };

        this.addPost(newPost);
        this.$emit("toggleadd");
      }
    }
  };
</script>
