<template>
  <div>
    <div class="container my-4">
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email"
          >
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input
            v-model="senha"
            type="password"
            class="form-control"
            id="senha"
            placeholder="Password"
          >
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
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
  name: "Login",
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    submitLogin() {
      const user = {
        email: this.email,
        password: this.senha
      };

      this.login(user);
    },
    ...mapActions(["login"])
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
