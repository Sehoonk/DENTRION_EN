<template>
  <div class="container">
    <div class="comment_container" style="overflow: hidden">
      <div
        class="commnet_box green_box"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <div>
          Dentrion's technicians combine digital expertise with exceptional
          craftsmanship to create prosthetics with perfect fit, making chairside
          seating effortless.
        </div>
        <div style="display: flex; align-items: center; gap: 10px">
          <img style="width: 40px" src="../assets/icon/doctor_01.png" alt="" />
          <p>K** Doctor</p>
        </div>
      </div>
      <div
        class="commnet_box grey_box"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <div>
          The tooth designs are outstanding and color matching is spot-on,
          leading to high patient satisfaction.
        </div>
        <div style="display: flex; align-items: center; gap: 10px">
          <img style="width: 40px" src="../assets/icon/doctor_02.png" alt="" />
          <p>P** Doctor</p>
        </div>
      </div>
      <div
        class="commnet_box green_box"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <div>
          The jigs and custom abutments provide excellent retention. Their
          ordering platform is intuitive, and packaging is professional.
        </div>
        <div style="display: flex; align-items: center; gap: 10px">
          <img style="width: 40px" src="../assets/icon/doctor_03.png" alt="" />
          <p>H** Doctor</p>
        </div>
      </div>
      <div
        class="commnet_box grey_box"
        data-aos="fade-left"
        data-aos-duration="600"
      >
        <div>
          They quickly implement feedback with precise understanding of our
          needs. Their prosthetic quality is outstanding.
        </div>
        <div style="display: flex; align-items: center; gap: 10px">
          <img style="width: 40px" src="../assets/icon/doctor_04.png" alt="" />
          <p>S** Doctor</p>
        </div>
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
  background-color: #fcf7f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 100px 20px;
}
.comment_container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.green_box {
  background-color: #bee0c7;
}
.grey_box {
  background-color: #e8e8e8;
}
.commnet_box {
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  font-size: 18px;

  font-weight: 500;
  color: #266533;
}
.commnet_box > div > p {
  font-size: 14px;
  color: #696866;
  font-weight: 400;
}
</style>
