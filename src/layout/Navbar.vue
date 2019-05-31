<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Post Social</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Posts</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isAuthenticated" class="nav-link" to="/login"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                v-if="!isAuthenticated"
                class="nav-link"
                to="/register"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <a
                style="cursor: pointer;"
                v-if="isAuthenticated"
                class="nav-link"
                @click="logout"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Navbar",
    computed: {
      ...mapGetters(["isAuthenticated"])
    },
    methods: {
      ...mapActions(["logout"])
    }
  };
</script>

<style>
</style>
