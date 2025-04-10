<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div>
        <img width="100" src="../assets/icon/mail_01.png" alt="Mail Icon" />
        <p class="main_text">Thank you for <br />reaching out.</p>
      </div>
      <div class="sub_text">
        <p>We'll get back to you via</p>
        <p>the email address you provided.</p>
      </div>
      <div>
        <p style="letter-spacing: 5px; margin: 20px 0">
          ----------------------------
        </p>
        <img width="50" src="../assets/icon/check_01.png" alt="Mail Icon" />
      </div>
      <div class="sub_text" style="letter-spacing: 1.5px">
        <p>DENTRION provides FDA-approved</p>
        <p>dental prosthetics.</p>
      </div>
      <div>
        <button class="confirm-btn" @click="closeModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MailSuccessModal",
  methods: {
    closeModal() {
      // 모달을 닫고 최상단으로 스크롤
      window.scrollTo({ top: 0, behavior: "smooth" });
      // 모달을 닫는 로직이 필요하면 부모 컴포넌트로 이벤트를 보낼 수 있음
      this.$emit("close"); // 예: 부모 컴포넌트에서 모달 상태를 관리할 경우
    },
  },
  mounted() {
    // 모달이 열릴 때 스크롤 금지
    document.body.style.overflow = "hidden";
  },
  beforeUnmount() {
    // 모달이 닫힐 때 스크롤 복원
    document.body.style.overflow = "auto";
  },
};
</script>

<style scoped>
/* 모달 오버레이 (배경) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* 검정색, 70% 투명도 */
  backdrop-filter: blur(5px); /* 블러 효과 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1000; /* 다른 요소 위에 표시 */
}

/* 모달 콘텐츠 */
.modal-content {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.main_text {
  margin-top: 20px;
  font-size: 28px;
  font-weight: 700;
}
.sub_text {
  margin: 20px 0;
  line-height: 1.5;
  font-size: 16px;
  letter-spacing: 1px;
}

/* 확인 버튼 스타일 */
.confirm-btn {
  margin-top: 20px;
  padding: 10px 50px;
  background-color: #339551;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 24px;
}
</style>
