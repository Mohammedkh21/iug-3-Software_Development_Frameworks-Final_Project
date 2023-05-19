<template>
  <div class="container mt-5 div1">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form @submit.prevent="signup">
              <div class="row mb-3" v-if="error">
                <label class="text-center text-danger">{{ error }}</label>
              </div>

              <div class="row mb-3">
                <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="name"
                    required
                    autocomplete="name"
                    autofocus
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="email" class="col-md-4 col-form-label text-md-end"
                  >Email Address</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    autocomplete="email"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="password" class="col-md-4 col-form-label text-md-end"
                  >Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-end"
                  >Confirm Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
                <div class="col-md-6 offset-md-4 mt-3">
                  <RouterLink style="text-decoration: none" to="/login">login</RouterLink>
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

export default {
  name: "RegisterPage",
  data: function () {
    return {
      data: [],
      error: "",
    };
  },
  created: function () {},
  methods: {
    async signup(form) {
      const data = form.target.elements;
      if (data.password.value != data.password_confirmation.value) {
        this.error = "password doesnt match Confirm Password";
        return;
      }
      api.signup(data).then((result) => {
        if (result.data.status === true) {
          router.push({ path: "/login" });
        } else {
          this.error = result.data.message;
        }
      });
    },
  },
};
</script>
