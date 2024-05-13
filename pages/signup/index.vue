<template>
  <Navbar />
  <div class="signup-container">
    <form class="signup-form" @submit.prevent="submitForm">
      <h2>Sign Up</h2>
      <input type="text" v-model="name" placeholder="Full Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <input
        type="password"
        v-model="repeatPassword"
        placeholder="Repeat password"
        required
      />
      <p
        v-if="password !== repeatPassword && repeatPassword !== ''"
        class="error-message"
      >
        Passwords do not match
      </p>
      <p v-if="!isPasswordStartValid" class="error-message">
        Password must start with a letter
      </p>
      <p v-if="!isPasswordLengthValid" class="error-message">
        Password must be at least 8 characters long
      </p>
      <button type="submit" :disabled="!isFormValid">Sign Up</button>
    </form>
  </div>
</template>

<script>
import "~/assets/css/signup.css";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  computed: {
    isFormValid() {
      return (
        this.password === this.repeatPassword &&
        this.isPasswordStartValid &&
        this.isPasswordLengthValid
      );
    },
    isPasswordStartValid() {
      const firstChar = this.password.charAt(0);
      return /[a-zA-Z]/.test(firstChar);
    },
    isPasswordLengthValid() {
      return this.password.length >= 8;
    },
  },
  methods: {
    async submitForm() {
      if (this.isFormValid) {
        try {
          const responseData = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.name,
              email: this.email,
              password: this.password,
              password2: this.repeatPassword,
            }),
          });

          if (responseData.statusCode === 201) {
            // const responseData = await response.json();
            // console.log("Success:", responseData);
            this.$router.push("/created");
          } else if (response.statusCode === 422) {
            alert("User not created. Please try again!");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        alert("Please check the form for errors");
      }
    },
  },
};

definePageMeta({
  middleware: "auth",
});
</script>
