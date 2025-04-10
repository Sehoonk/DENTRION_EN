<template>
  <div class="app-container">
    <MainPage />
  </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 웹 환경 (데스크톱)에서만 최대 크기 적용 */
@media (min-width: 769px) {
  .app-container {
    max-width: 448px; /* 웹일 때 최대 너비 */
    max-height: 869px; /* 웹일 때 최대 높이 */
    border: 1px solid #ccc; /* 선택: 테두리 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 선택: 그림자 */
  }
}

p {
  margin: 0;
}

@font-face {
  src: url(./assets/font/Roboto-Italic.ttf);
  font-family: "Roboto-Italic";
}
</style>
