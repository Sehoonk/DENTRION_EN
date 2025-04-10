import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS의 기본 CSS 파일 가져오기
import "./assets/styles.css";
const app = createApp(App);

// AOS 초기화
AOS.init({
  // 전역 설정 (선택 사항)
  duration: 1000, // 애니메이션 지속 시간 (ms)
  easing: "ease-in-out", // 애니메이션 속도 곡선
  once: false, // 한 번만 애니메이션 실행 여부
});

app.mount("#app");
