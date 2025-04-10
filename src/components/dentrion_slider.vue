<template>
  <div class="container">
    <div class="slider_container">
      <div
        v-for="(box, index) in sliderBoxes"
        :key="index"
        class="slider_box"
        :class="{ expanded: activeSlider === index }"
        @click="toggleSlider(index)"
      >
        <div class="slider_content">
          <img :src="box.icon" alt="" class="slider_icon" />
          <div>
            <p>{{ box.text1 }}</p>
            <p v-if="box.text2">{{ box.text2 }}</p>
          </div>
        </div>
        <transition name="slide">
          <div
            v-if="activeSlider === index"
            class="carousel"
            @touchstart="handleSwipe"
          >
            <div
              class="carousel_inner"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(image, idx) in sliderImages[index]"
                :key="idx"
                class="carousel_item"
              >
                <img :src="image" alt="" class="carousel_image" />
              </div>
            </div>
            <div class="pagination">
              <span
                v-for="(dot, idx) in sliderImages[index].length"
                :key="idx"
                class="pagination_dot"
                :class="{ active: idx === currentSlide }"
                @click.stop="goToSlide(idx)"
              ></span>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="sub_container">
      <div class="image_wrapper">
        <img src="../assets/image/14.jpg" alt="" />
        <div class="overlay">
          <p data-aos="fade-up" data-aos-duration="100">DENTRION cuts both</p>
          <p data-aos="fade-up" data-aos-duration="200">
            chair time and stress
          </p>
          <p data-aos="fade-up" data-aos-duration="300">
            by <span style="color: #eaef00">50%</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderBoxes: [
        {
          icon: require("../assets/icon/icon_01.png"),
          text1: "Cutting-Edge QC Systems",
        },
        {
          icon: require("../assets/icon/icon_02.png"),
          text1: "ONE-STOP",
          text2: "Digital Manufacturing",
        },
        {
          icon: require("../assets/icon/icon_03.png"),
          text1: "Nationally Certified",
          text2: "Dental Technicians",
        },
      ],
      sliderImages: [
        [
          require("../assets/image/02.jpg"),
          require("../assets/image/03.jpg"),
          require("../assets/image/04.jpg"),
        ],
        [
          require("../assets/image/05_CNC.png"),
          require("../assets/image/06.png"),
          require("../assets/image/07.png"),
        ],
        [
          require("../assets/image/08.png"),
          require("../assets/image/09_inLab_MCX5.png"),
          require("../assets/image/10_trios5.png"),
        ],
      ],
      activeSlider: null,
      currentSlide: 0,
      touchStartX: 0, // 스와이프 시작 위치
      touchOffset: 0, // 실시간 이동 거리
    };
  },
  methods: {
    toggleSlider(index) {
      if (this.activeSlider === index) {
        this.activeSlider = null;
      } else {
        this.activeSlider = index;
        this.currentSlide = 0;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.touchOffset = 0; // 페이징 클릭 시 오프셋 초기화
    },
    handleSwipe(event) {
      this.touchStartX = event.touches[0].clientX;

      const touchMoveHandler = (moveEvent) => {
        const touchMoveX = moveEvent.touches[0].clientX;
        this.touchOffset = touchMoveX - this.touchStartX;
        // 실시간으로 슬라이드 위치 업데이트 (부드러운 이동)
        const translateX = `translateX(calc(-${this.currentSlide * 100}% + ${
          this.touchOffset
        }px))`;
        document.querySelector(".carousel_inner").style.transform = translateX;
      };

      const touchEndHandler = () => {
        const swipeDistance = this.touchOffset;
        const threshold = 50; // 스와이프 인식 최소 거리

        if (swipeDistance > threshold && this.currentSlide > 0) {
          this.currentSlide--; // 오른쪽으로 스와이프 (이전 슬라이드)
        } else if (
          swipeDistance < -threshold &&
          this.currentSlide < this.sliderImages[this.activeSlider].length - 1
        ) {
          this.currentSlide++; // 왼쪽으로 스와이프 (다음 슬라이드)
        }

        // 슬라이드 위치 초기화
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
/* 전체 컨테이너 스타일 */
.container {
  height: 100%;

  background-color: #fcf7f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  gap: 60px;
}

.slider_container {
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
}

.slider_box {
  background-color: #bee0c7;
  height: 80px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  font-family: "Wanted Sans", sans-serif;
  font-weight: 700;
  color: #266533;
  cursor: pointer;
  transition: height 0.3s ease;
}

.slider_box.expanded {
  height: 380px;
}

.slider_content {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 80px;
  font-size: 20px;
}

.slider_icon {
  width: 40px;
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
  transition: transform 0.3s ease; /* 부드러운 전환 */
}

.carousel_item {
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.carousel_image {
  max-width: 100%;
  max-height: calc(100% - 10px);
  border-radius: 8px;
}

.pagination {
  background-color: white;
  padding: 5px 10px;
  border-radius: 10px;
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

.sub_container {
  position: relative;
  width: 100%;
}

.image_wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.image_wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #bee0c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  font-family: "Wanted Sans", sans-serif;
  line-height: 1.5;
}

/* 슬라이드 애니메이션 */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
