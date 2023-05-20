<template>
  <div class="container mt-5 div1">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form @submit.prevent="login">
              <div class="row mb-3" v-if="error">
                <label class="text-center text-danger">{{ error }}</label>
              </div>

              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end">
                  Email Address
                </label>

                <div class="col-md-6">
                  <input
                    id="non"
                    type="text"
                    class="form-control"
                    name="email"
                    required
                    autocomplete="non"
                    autofocus
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="password" class="col-md-4 col-form-label text-md-end">
                  Password
                </label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="current-password"
                  />
                </div>
              </div>

              <div class="row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
              <div class="row mb-0 mt-3">
                <div class="col-md-8 offset-md-4">
                  <RouterLink style="text-decoration: none" to="/register"
                    >register</RouterLink
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import api from "../../api/index.js";
import session from "../../session";

export default {
  name: "RegisterPage",
  data: function () {
    return {
      error: "",
    };
  },
  methods: {
    login(form) {
      const data = form.target.elements;

      api.login(data).then((result) => {
        console.log(result);
        if (result.data.status) {
          session.setItem("token", result.data.token);
          router.push({ path: "/" });
        } else {
          this.error = result.data.message;
        }
      });
    },
  },
};
</script>
