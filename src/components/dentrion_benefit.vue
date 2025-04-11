<template>
  <div class="container">
    <div class="benefit_header">
      <p
        class="sub_title"
        style="font-family: 'Roboto-Italic'; letter-spacing: 0.3px"
      >
        Benefits
      </p>
      <div class="header_title">
        <p>Dentrion'<span style="font-size: 40px">s</span></p>
        <p>Special Offer</p>
      </div>
      <div class="sub_text">
        <p>Try our digital cases for free!</p>
        <span></span>
      </div>
    </div>
    <div class="benefit_container">
      <div class="benefit_contents" data-aos="fade-up" data-aos-duration="600">
        <div class="coupon_container">
          <img
            src="../assets/icon/coupon_01.png"
            alt="Coupon Background"
            class="coupon_image"
          />
          <div class="coupon_content">
            <div class="coupon_header">
              <p class="benefit_title">FREE</p>
              <p class="benefit_subtext">2 Digital Cases</p>
            </div>
            <div class="benefit_logo">DENTRION</div>
          </div>
        </div>
      </div>

      <div class="benefit_contents" data-aos="fade-up" data-aos-duration="600">
        <div class="coupon_container">
          <img
            src="../assets/icon/coupon_01.png"
            alt="Coupon Background"
            class="coupon_image"
          />
          <div class="coupon_content">
            <div class="coupon_header">
              <p class="benefit_title">7-DAY</p>
              <p class="benefit_subtext">Fast shipping / In-Lab working time</p>
            </div>
            <div class="benefit_logo">DENTRION</div>
          </div>
        </div>
      </div>
    </div>

    <div class="benefit_footer">
      <div class="sub_title">Send Us Your Case</div>
      <div class="delivery_logo">
        <img
          src="../assets/icon/delivery_01.png"
          width="120"
          height="30"
          alt=""
        />
        <img
          src="../assets/icon/delivery_02.png"
          width="130"
          height="40"
          alt=""
        />
        <img
          style="margin-left: -5px"
          src="../assets/icon/delivery_03.png"
          height="50"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
.container {
  height: 100%;
  background-color: #e5f3e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  gap: 60px;
}
.benefit_header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.sub_title {
  font-size: 18px;
  font-weight: 500;
  color: #339551;
}
.header_title {
  text-align: center;
  font-size: 40px;
  font-weight: 900;
}
.sub_text {
  position: relative;
  white-space: nowrap;
  width: 100%;
}
.sub_text > p {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  z-index: 99;
  font-size: 24px;
  font-weight: 700;
}
.sub_text > span {
  position: absolute;
  width: 40%;
  height: 15px;
  background-color: #bee0c7;
  top: 18px;
  left: 28%;
  z-index: 1;
}
.benefit_subtext {
  margin-top: -5px;
  color: #696866;
  font-weight: 400;
  font-size: 14px;
}
.benefit_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-top: 40px;
}
.benefit_contents {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  gap: 10px;
}

.coupon_container {
  position: relative;
  width: 100%;
  max-width: 360px;
}

.coupon_image {
  width: 100%;
  height: auto;
  display: block;
}

.coupon_content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 5px;
  box-sizing: border-box;
}

.coupon_header {
  padding-left: 30px;
  color: #339551;
  font-weight: 500;
}
.benefit_logo {
  text-align: end;
  padding-right: 20px;
  color: #868585;
  font-weight: 700;
}
.benefit_title {
  font-size: 50px;
  font-weight: 900;
}
.benefit_footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  margin-top: 40px;
  gap: 20px;
  background-color: #bee0c7;
}
.delivery_logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
