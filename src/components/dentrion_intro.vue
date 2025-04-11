<template>
  <div class="dentrion_header">
    <img
      width="40%"
      src="../assets/icon/dentrion_logo_white3.png"
      alt="DENTRION"
    />
  </div>
  <div class="intro_container">
    <div class="font_container">
      <div class="header_title">
        <h1 data-aos="fade-up" data-aos-duration="400">Reduce Chair Time</h1>
        <h1 data-aos="fade-up" data-aos-duration="600">
          with Digital Dental Lab
        </h1>
        <h1 data-aos="fade-up" data-aos-duration="800">DENTRION</h1>
      </div>
      <div class="header_sub">
        <p>Experience high-quality dental</p>
        <p>prosthetics crafted with precision</p>
        <p>technology and exceptional service.</p>
        <p>DENTRON, a premium digital</p>
        <p>dental lab, enhances your practice's value.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* 전체 컨테이너 스타일 */
.intro_container {
  height: 100vh;
  background-image: url("../assets/image/01.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dentrion_header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: black;
}

/* 폰트 컨테이너 스타일 */
.font_container {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* 타이틀 컨테이너 스타일 */
.header_title {
  text-align: center;
  color: #bee0c7;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.header_title > h1 {
  font-weight: 900;
  margin: 0;
}

.header_sub {
  text-align: center;
  color: #bee0c7;
  line-height: 1.5;
  font-size: 18px;
}
</style>
