export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");

  if (to.path === "/account" && !token.value) {
    return navigateTo("/login");
  }

  if ((to.path === "/login" || to.path === "/signup") && token.value) {
    return navigateTo("/account");
  }
});
