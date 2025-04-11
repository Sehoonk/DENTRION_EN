<template>
  <div class="rate_container">
    <div class="header_title">
      <h1 data-aos="fade-up" data-aos-duration="400">DENTRION is trusted</h1>
      <h1 data-aos="fade-up" data-aos-duration="600">
        by dental professionals.
      </h1>
    </div>
    <div class="rate_content_container">
      <div class="rate_contents">
        <div class="content_circle">Client Retention Rate</div>
        <p style="margin-left: 5px"><span>95.6</span>%</p>
      </div>
      <div class="rate_contents">
        <div class="content_circle">Cases Completed</div>
        <p style="display: flex; align-items: center"><span>100M</span>+</p>
      </div>
      <div class="rate_contents">
        <div class="content_circle">Growth Rate</div>
        <p style="margin-left: 8px"><span>103</span>%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* 전체 컨테이너 스타일 */
.rate_container {
  padding: 100px 20px;
  background-image: url("../assets/image/그래프_01.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}
.rate_content_container {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
/* 타이틀 컨테이너 스타일 */
.header_title {
  text-align: start;
  color: #bee0c7;
  width: 100%;
  font-family: "Wanted Sans", sans-serif;
  font-weight: 700;
}

.header_title h1 {
  font-size: 28px;
  font-weight: 900;
  line-height: 0.8;
}
.content_circle {
  border: 2px solid #eaef00;
  padding: 2px 10px;
  border-radius: 20px;
}
.rate_contents {
  color: #eaef00;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
  font-weight: 500;
}

.rate_contents > p {
  font-size: 24px;
  font-weight: 900;
}

.rate_contents > p > span {
  font-size: 52px;
  font-weight: 900;
}
</style>
