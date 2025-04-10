<template>
  <div class="container">
    <div class="form_container">
      <p class="form_subtitle">Contact</p>
      <p class="form_title">Boost your practice<br />with DENTRON!</p>

      <form class="form" @submit.prevent="handleSubmit">
        <div class="input_group">
          <div class="field_wrapper" style="width: 40%">
            <label class="field_label">First Name</label>
            <input type="text" class="input_field" style="width: 100%" />
          </div>
          <div class="field_wrapper" style="width: 40%">
            <label class="field_label">Last Name</label>
            <input type="text" class="input_field" style="width: 100%" />
          </div>
        </div>

        <div class="field_wrapper">
          <label class="field_label">Email Address</label>
          <input type="email" class="input_field" />
        </div>

        <div class="field_wrapper">
          <label class="field_label">Name of Practice</label>
          <input type="text" class="input_field" />
        </div>

        <div class="field_wrapper">
          <label class="field_label">Select a Country</label>
          <select class="select_field">
            <option value="" selected></option>
            <option
              v-for="country in countries"
              :key="country"
              :value="country"
            >
              {{ country }}
            </option>
          </select>
        </div>

        <div class="field_wrapper">
          <label class="field_label">Select Intraoral Scanner</label>
          <select class="select_field">
            <option value="" selected></option>
            <option v-for="scanner in scanners" :key="scanner" :value="scanner">
              {{ scanner }}
            </option>
          </select>
        </div>

        <div class="field_wrapper">
          <label class="field_label">Message</label>
          <textarea class="textarea_field"></textarea>
        </div>

        <button type="submit" class="submit_button">Send</button>
      </form>
      <SendSuccess v-if="showSuccessModal" @close="closeModal" />
    </div>
  </div>
</template>
<script>
import data from "@/assets/data/data.json";
import SendSuccess from "./send_success.vue"; // send_success.vue 파일 경로에 맞게 수정

export default {
  components: {
    SendSuccess,
  },
  data() {
    return {
      countries: data.countries,
      scanners: data.scanners,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        practiceName: "",
        country: "",
        scanner: "",
        message: "",
      },
      showSuccessModal: false, // 모달 표시 상태
    };
  },
  methods: {
    handleSubmit() {
      // 여기서 실제 폼 데이터를 서버로 전송하는 로직을 추가할 수 있음
      console.log("Form submitted:", this.form);

      // 폼 제출 성공 시 모달 표시
      this.showSuccessModal = true;

      // 폼 초기화 (선택 사항)
      this.resetForm();
    },
    resetForm() {
      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        practiceName: "",
        country: "",
        scanner: "",
        message: "",
      };
    },
    closeModal() {
      this.showSuccessModal = false; // 모달 닫기
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/complete/WantedSans.min.css");

.container {
  display: flex;
  flex-direction: column;
  padding: 100px 10px 20px 10px;
  background-color: #e5f3e9;
  font-family: "Wanted Sans", sans-serif;
}

.form_container {
  background-color: white;
  border-radius: 30px;
  padding: 40px 10px;
  width: calc(100% - 20px);
}

.form_subtitle {
  font-size: 20px;
  font-weight: 500;
  color: #339551;
  letter-spacing: 1px;
  font-family: "Roboto-Italic", sans-serif;
  text-align: center;
}

.form_title {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
}

.field_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field_label {
  font-size: 14px;
  font-weight: 900;
  color: #374151;
}

.input_group {
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}

.input_field,
.select_field,
.textarea_field {
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-family: "Wanted Sans", sans-serif;
}
.input_field:focus,
.select_field:focus,
.textarea_field:focus {
  outline: none;
}

.textarea_field {
  height: 80px;
  resize: none;
}

.select_field {
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 30px;
}

/* Button Styles */
.submit_button {
  background-color: #339551;
  color: white;
  font-weight: bold;
  padding: 5px 30px;
  border-radius: 50px;
  width: fit-content;
  border: none;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 20px;
}
</style>
