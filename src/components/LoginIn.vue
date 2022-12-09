<template>
  <div id="app">
    <div class="login-page">
      <transition name="fade">
        <div
          v-if="!registerActive"
          class="wallpaper-login"
        />
      </transition>
      <div class="wallpaper-register" />

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <h1>Sign In</h1>
            <form class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              >
              <input
                type="submit"
                class="btn btn-primary"
                @click.prevent="doLogin"
              >
              <p>
                Don't have an account?
                <a
                  href="#"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                >Sign up here</a>
              </p>
              <p><a href="#">Forgot your password?</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        email: '',
        password:'' ,
        token: "",
      };
    },

    methods: {
      async doLogin() {
        await axios
          .post("https://aurora-team.com/beeb-beeb-App/en/auth-user", {
            email: this.email,
            password: this.password,
          })

          .then((response) => {
            this.token = response.data;
           localStorage.setItem("token", this.token);
          })
          .catch((error) => {
            console.log('error'+this.email + this.password);
          });
      },
  
    },
  };
</script>

<style scoped>
  * {
    padding: 1rem;
  }
  input {
    margin-bottom: 1rem;
  }
</style>
