<template>
  <div>
    <div class="container my-4">
      <form @submit.prevent="submitRegister">
        <div class="form-group">
          <label for="email">Nome</label>
          <input
            v-model="name"
            type="name"
            class="form-control"
            id="name"
            placeholder="Nome"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            required
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input
            v-model="senha"
            type="password"
            required
            class="form-control"
            id="senha"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  import router from "../routes";
  import store from "../store";
  import setAuthToken from "../utils/setAuthToken";

  export default {
    name: "Register",
    data() {
      return {
        name: "",
        email: "",
        senha: ""
      };
    },
    methods: {
      submitRegister() {
        const user = {
          name: this.name,
          email: this.email,
          password: this.senha
        };

        this.register(user);
      },
      ...mapActions(["register"])
    },
    computed: {
      ...mapGetters(["isAuthenticated"])
    },
    beforeRouteEnter(to, from, next) {
      if (!store.state.auth.isAuthenticated)
        if (localStorage.getItem("@PostSocial:token")) {
          const token = localStorage.getItem("@PostSocial:token", token);
          setAuthToken(token);

          store.dispatch("setCurrentUser");
          router.push("/");
        } else {
          next();
        }
      else {
        router.push("/");
      }
    },
    updated() {
      if (this.isAuthenticated) {
        router.push("/");
      }
    }
  };
</script>

<style>
</style>
