<template>
  <footer class="footer">
    <div class="footer_container">
      <img src="../assets/image/dentrion_logo_sm.png" alt="" />

      <div class="toggle_title" @click="isOpen = !isOpen">
        <p>BUSINESS INFORMATION</p>
        <div class="toggle_icon" :class="{ 'rotate-180': isOpen }">
          <img width="10" src="../assets/icon/down_arrow.png" alt="" />
        </div>
      </div>

      <!-- Business Info -->
      <transition name="fade">
        <div v-if="isOpen" class="business_info">
          <p class="business_info_item">
            <strong>BUSINESS NAME</strong> DENTRION
          </p>
          <p class="business_info_item"><strong>CEO</strong> ILDO JEONG</p>
          <p class="business_info_item">
            <strong>BUSINESS LICENSE</strong> 604-85-60729
          </p>
          <p class="business_info_item">
            <strong>ADDRESS</strong> 703~707, Building A, Incheon Technovalley
            U1 Center, 236, Jubuto-ro, Bupyeong-gu, Incheon, Republic of Korea
          </p>
          <p class="business_info_item">
            <strong>TEL.</strong> 032-545-2804 / 032-541-5703
          </p>
          <p class="business_info_item">
            <strong>E-mail:</strong> contact@dentrion.co.kr
          </p>
        </div>
      </transition>

      <!-- Privacy Policy -->
      <div class="privacy_policy">
        <a
          href="https://kr.object.ncloudstorage.com/dentrion-resource/policy/dentrion_privacy_policy2.html"
        >
          Privacy Policy
        </a>
      </div>

      <!-- Copyright -->
      <div class="copyright">COPYRIGHT ⓒDENTRION INC.ALL RIGHTS RESERVED.</div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false, // 기본으로 열려 있음
    };
  },
};
</script>
<style scoped>
/* Footer 스타일 */
.footer {
  background-color: #e7f1eb;
  font-size: 20px;
  padding: 2rem 1rem;
  text-align: center;
}

.toggle_title {
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.toggle_icon.rotate-180 {
  transform: rotate(180deg);
}

/* Business Info 스타일 */
.business_info {
  text-align: center;
  color: #555;
  font-size: 12px;
  line-height: 1.25;
  margin-top: 20px;
}

.business_info_item {
  margin-bottom: 5px;
}

.privacy_policy {
  font-weight: 900;
  color: #555;
  font-size: 12px;
  margin-top: 20px;
  display: inline-block;
  letter-spacing: 1px;
  border-bottom: 1px solid #555;
}

.copyright {
  margin-top: 0.5rem;
  font-weight: 400;
  color: #555;
  letter-spacing: 1px;
  font-size: 8px;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
