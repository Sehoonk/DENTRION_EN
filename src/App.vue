<template>
  <MainPage />
</template>

<script>
import MainPage from "./pages/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Wanted Sans", sans-serif;
}
p {
  margin: 0;
}

@font-face {
  src: url(./assets/font/Roboto-Italic.ttf);
  font-family: "Roboto-Italic";
}
</style>
