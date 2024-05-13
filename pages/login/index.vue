<template>
  <Navbar />
  <div class="signup-container">
    <form class="signup-form" @submit.prevent="submitForm">
      <h2>Login</h2>
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <p class="create-account">
        Don't have an account? <router-link to="/signup">Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
          credentials: "include",
        });

        const data = await response.json();

        if (data.statusCode === 200) {
          document.cookie = `token=${data.token}; Max-Age=${
            60 * 60
          }; Secure; SameSite=Strict;`;

          this.$router.push("/account");
        } else if (data.statusCode === 401) {
          return alert("User not found! Please sign up!");
        }
      } catch (error) {
        console.error("Error:", error);
        return alert("Failed to login. Please try again.");
      }
    },
  },
};

definePageMeta({
  middleware: "auth",
});
</script>
