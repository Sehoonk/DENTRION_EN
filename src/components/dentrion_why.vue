<template>
  <div class="container">
    <div class="header_title">
      <h1 data-aos="fade-up" data-aos-duration="800">Why Choose</h1>
      <h1 data-aos="fade-up" data-aos-duration="1000">DENTRION?</h1>
    </div>
    <!-- quality -->
    <div class="quality_container">
      <div class="sub_title">Quality</div>
      <div class="main_text">
        <p>Exceptional Fix,</p>
        <p>Unmatched Quality</p>
      </div>
      <div class="sub_text">
        <p>Meticulously crafted using cutting-edge</p>
        <p>CAD/CAM & 3D printing technology</p>
        <p>with skilled technicians' expertise.</p>
      </div>
      <div class="carousel_container">
        <div class="carousel" @touchstart="handleSwipe">
          <div
            class="carousel_inner"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(image, idx) in sliderImages"
              :key="idx"
              class="carousel_item"
            >
              <img :src="image" alt="" class="carousel_image" />
            </div>
          </div>
          <div class="pagination">
            <span
              v-for="(dot, idx) in sliderImages.length"
              :key="idx"
              class="pagination_dot"
              :class="{ active: idx === currentSlide }"
              @click.stop="goToSlide(idx)"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- value -->
    <div class="quality_container">
      <div class="sub_title">Value</div>
      <div class="main_text">
        <p>Competitive Pricing</p>
      </div>
      <div class="sub_text">
        <p>Premium prosthetics made with</p>
        <p>top-quality materials at affordable</p>
        <p>prices — 49% lower than US alternatives.</p>
      </div>
      <div class="value_contents">
        <div class="local_box box">
          <div class="local_box_title box_title">
            <p>Local</p>
          </div>
          <div class="box_price local_box_price">
            <p>$152</p>
            <p>$389</p>
            <p>$4191</p>
          </div>
        </div>
        <div class="item_box box_price">
          <p class="item">Zirconia Crown</p>
          <p class="item">Implant Crown</p>
          <p class="item">All on X</p>
        </div>
        <div class="dentrion_box box">
          <div class="dentrion_box_title box_title">
            <p>DENTRION</p>
          </div>
          <div class="box_price dentrion_box_price">
            <p>$90</p>
            <p>$130</p>
            <p>$2500</p>
          </div>
          <div class="circle_position">
            <div
              class="average_circle"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <p>Average</p>
              <p><span style="font-size: 28px; font-weight: 900">49</span>%</p>
            </div>
            <img class="coin_img" src="../assets/icon/coin_02.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Solution -->
    <div class="solution_container">
      <div class="sub_title" style="text-align: end">Solutions</div>
      <div class="main_text" style="text-align: end">
        <p data-aos="fade-in" data-aos-duration="400">Simple Ordering!</p>
        <p data-aos="fade-in" data-aos-duration="600">Hassle-Free Payment!</p>
        <p data-aos="fade-in" data-aos-duration="800">Comprehensive</p>
        <p data-aos="fade-in" data-aos-duration="1000">Data Tracking!</p>
      </div>
      <div class="solutions_items_container" style="z-index: 3">
        <div class="solutions_movie">
          <div class="backgound_video">
            <video autoplay muted loop playsinline>
              <source src="../assets/video/01_주문.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="sub_text" style="text-align: center">
            <p>User-friendly ordering system</p>
            <p>anyone can navigate.</p>
          </div>
        </div>

        <div class="solutions_movie">
          <div class="backgound_video">
            <video autoplay muted loop playsinline>
              <source src="../assets/video/02_배송.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="sub_text" style="text-align: center">
            <p>Track the status of your prosthetic</p>
            <p>requests at a glance.</p>
          </div>
        </div>

        <div class="solutions_movie">
          <div class="backgound_video">
            <video autoplay muted loop playsinline>
              <source src="../assets/video/03_카드.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="sub_text" style="text-align: center">
            <p>Received our services?</p>
            <p>Pay with ease!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderImages: [
        require("../assets/image/15.jpg"),
        require("../assets/image/16.jpg"),
        require("../assets/image/17.jpg"),
      ],
      currentSlide: 0,
      touchStartX: 0,
      touchOffset: 0,
    };
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index;
      this.touchOffset = 0;
    },
    handleSwipe(event) {
      this.touchStartX = event.touches[0].clientX;

      const touchMoveHandler = (moveEvent) => {
        const touchMoveX = moveEvent.touches[0].clientX;
        this.touchOffset = touchMoveX - this.touchStartX;
        const translateX = `translateX(calc(-${this.currentSlide * 100}% + ${
          this.touchOffset
        }px))`;
        document.querySelector(".carousel_inner").style.transform = translateX;
      };

      const touchEndHandler = () => {
        const swipeDistance = this.touchOffset;
        const threshold = 50;

        if (swipeDistance > threshold && this.currentSlide > 0) {
          this.currentSlide--;
        } else if (
          swipeDistance < -threshold &&
          this.currentSlide < this.sliderImages.length - 1
        ) {
          this.currentSlide++;
        }

        this.touchOffset = 0;
        document.querySelector(
          ".carousel_inner"
        ).style.transform = `translateX(-${this.currentSlide * 100}%)`;

        document.removeEventListener("touchmove", touchMoveHandler);
        document.removeEventListener("touchend", touchEndHandler);
      };

      document.addEventListener("touchmove", touchMoveHandler);
      document.addEventListener("touchend", touchEndHandler);
    },
  },
};
</script>
<style scoped>
h1 {
  margin: 0;
}
.container {
  height: 100%;
  padding-top: 80px;
  background-color: #e5f3e9;
}
.header_title > h1 {
  font-weight: 900;
  line-height: 1.2;
  font-size: 36px;
  padding: 0 20px;
}
.quality_container {
  padding: 0 20px;
  margin-top: 60px;
}

.solution_container {
  padding: 80px 20px;
  margin-top: 50px;
  background-color: #bee0c7;
}

.sub_title {
  font-size: 18px;
  font-weight: 700;
  color: #266533;
}
.main_text {
  margin: 10px 0;
  font-weight: 900;
  font-size: 30px;
}
.sub_text {
  font-size: 18px;
  color: #696866;
  line-height: 1.2;
}

.carousel_container {
  width: 100%;
  margin-top: 20px;
}

.carousel {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}

.carousel_inner {
  display: flex;
  height: 100%;
  transition: transform 0.3s ease;
}

.carousel_item {
  flex: 0 0 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.carousel_image {
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
}

.pagination {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.pagination_dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.pagination_dot.active {
  background-color: #266533;
}
.value_contents {
  display: flex;
  margin-top: 20px;
  padding-bottom: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
.local_box {
  width: 45%;
  background-color: #e4e3e3;
  height: 200px;
}
.dentrion_box {
  width: 50%;
  background-color: #bee0c7;
  height: 250px;
}
.box_title {
  height: 50px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: 900;
  letter-spacing: 1.2px;
}
.local_box_title {
  background-color: #afaeae;
}
.dentrion_box_title {
  background-color: #339551;
}
.box_price {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.local_box_price {
  color: #696866;
  font-size: 16px;
}
.dentrion_box_price {
  padding-top: 24px;
  color: #266533;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
}
.item_box {
  position: absolute;
  top: 74px;
}
.item {
  background-color: #339551;
  border-radius: 10px;
  padding: 1px 10px;
  color: white;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}
.average_circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #eaef00;
  margin-right: -70px;
  z-index: 3;
  font-size: 12px;
  color: #266533;
  font-weight: 700;
}
.coin_img {
  width: 150px;
  margin-right: -50px;
  z-index: 2;
}
.circle_position {
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0px;
  right: 0;
  overflow: hidden;
}
.solutions_movie {
  height: 100%;
}

.solutions_items_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin-top: 60px;
}
.backgound_video {
  width: 100%;
  margin-bottom: 20px;
}
.backgound_video > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.backgound_video > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
