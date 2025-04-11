<template>
  <div class="container">
    <div class="form_container">
      <p class="form_subtitle">Contact</p>
      <p class="form_title">Boost your practice<br />with DENTRON!</p>

      <form class="form" @submit.prevent="handleSubmit">
        <div class="input_group">
          <div class="field_wrapper" style="width: 40%">
            <label class="field_label">First Name</label>
            <input
              type="text"
              class="input_field"
              style="width: 100%"
              v-model.trim="form.firstName"
            />
          </div>
          <div class="field_wrapper" style="width: 40%">
            <label class="field_label">Last Name</label>
            <input
              type="text"
              class="input_field"
              style="width: 100%"
              v-model.trim="form.lastName"
            />
          </div>
        </div>

        <div class="field_wrapper">
          <label class="field_label">Email Address</label>
          <input type="email" class="input_field" v-model.trim="form.email" />
        </div>

        <div class="field_wrapper">
          <label class="field_label">Name of Practice</label>
          <input
            type="text"
            class="input_field"
            v-model.trim="form.practiceName"
          />
        </div>

        <div class="field_wrapper">
          <label class="field_label">Select a Country</label>
          <select class="select_field" v-model="form.country">
            <option value="" selected>(Select a Country)</option>
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
          <select class="select_field" v-model="form.scanner">
            <option value="" selected>(Select Intraoral Scanner)</option>
            <option v-for="scanner in scanners" :key="scanner" :value="scanner">
              {{ scanner }}
            </option>
          </select>
        </div>

        <div class="field_wrapper">
          <label class="field_label">Message</label>
          <textarea
            class="textarea_field"
            v-model.trim="form.message"
          ></textarea>
        </div>

        <button type="submit" class="submit_button" :disabled="!isFormComplete">
          Send
        </button>
      </form>
      <SendSuccess v-if="showSuccessModal" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import data from "@/assets/data/data.json";
import SendSuccess from "./send_success.vue";

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
      showSuccessModal: false,
    };
  },
  computed: {
    isFormComplete() {
      return (
        this.form.firstName &&
        this.form.lastName &&
        this.form.email &&
        this.form.practiceName &&
        this.form.country &&
        this.form.scanner &&
        this.form.message
      );
    },
  },
  methods: {
    handleSubmit() {
      if (!this.isFormComplete) return;
      console.log("Form submitted:", this.form);
      this.showSuccessModal = true;
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
      this.showSuccessModal = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 100px 10px 20px 10px;
  background-color: #e5f3e9;
}

.form_container {
  background-color: white;
  border-radius: 30px;
  padding: 40px 10px;
  width: calc(100% - 20px);
}

.form_subtitle {
  font-size: 18px;
  font-weight: 500;
  color: #339551;
  letter-spacing: 0.3px;
  font-family: "Roboto-Italic", sans-serif;
  text-align: center;
}

.form_title {
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 20px;
}

.field_wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.field_label {
  font-size: 16px;
  font-weight: 700;
  color: #374151;
}

.input_group {
  display: flex;
  justify-content: space-between;
  padding-right: 28px;
}

.input_field,
.select_field,
.textarea_field {
  background-color: #f1f1f1;
  padding: 14px;
  border-radius: 4px;
  border: none;
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
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit_button:disabled {
  background-color: #a3c8af;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
