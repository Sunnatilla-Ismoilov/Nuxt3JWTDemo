<template>
  <Navbar />
  <div class="created">
    <h2>Account created!</h2>
    <p>Your account has been created. You can now log in to your account.</p>
    <button class="btn"><NuxtLink to="/login">Go to Login</NuxtLink></button>
  </div>
</template>

<style scoped>
.created {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  margin-top: 50px;
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #d4d4d4;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
