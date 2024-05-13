<template>
  <div class="navbar">
    <div class="nav-logo">
      <NuxtLink to="/">Demo</NuxtLink>
    </div>
    <div class="nav-items">
      <ul>
        <li><NuxtLink to="/"> Home </NuxtLink></li>
        <li><NuxtLink to="/about"> About </NuxtLink></li>
        <li><NuxtLink to="/contact"> Contact </NuxtLink></li>
      </ul>
    </div>

    <div v-if="!isLoggedIn">
      <div class="nav-button">
        <div class="anim-layer"></div>
        <NuxtLink to="/signup">Sign Up</NuxtLink>
      </div>
      <div class="nav-button">
        <div class="anim-layer"></div>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const token = useCookie("token");
    const isLoggedIn = token.value ? true : false;

    return { isLoggedIn };
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #141214;
  justify-content: space-around;
  align-items: center;
  box-shadow: 7px 5px 15px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 5px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 5px 15px -4px rgba(0, 0, 0, 0.75);
}

.nav-items > ul > li {
  position: relative;
  display: inline;
  list-style: none;
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

.nav-items > ul > li > a {
  color: white;
  text-decoration: none;
}

.nav-items > ul > li::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.17rem;
  background-color: #c52726;
  left: 0;
  bottom: 0;
  transform-origin: 0% 100%;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-items > ul > li:hover::after {
  transform: scaleX(1);
}

.nav-logo a,
.nav-button a {
  color: white;
  list-style: none;
  text-decoration: none;
  display: flex;
}

.nav-logo {
  font-size: 32px;
}

.nav-button {
  background-color: #c52726;
  border-radius: 50px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
}

.anim-layer {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 100%;
  background-color: white;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-button:hover .anim-layer {
  width: 100%;
  left: 0;
}

.nav-button:hover a {
  color: #141214;
}

.nav-button a {
  display: block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 1;
}
</style>
