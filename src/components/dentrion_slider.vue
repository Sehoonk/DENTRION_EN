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
          <p data-aos="fade-up" data-aos-duration="400">DENTRION cuts both</p>
          <p data-aos="fade-up" data-aos-duration="600">
            chair time and stress
          </p>
          <p data-aos="fade-up" data-aos-duration="800">
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
          require("../assets/image/디지털_예시_01.png"),
          require("../assets/image/디지털_예시_02.png"),
          require("../assets/image/디지털_예시_03.png"),
        ],
        [
          require("../assets/image/11.jpg"),
          require("../assets/image/12.jpg"),
          require("../assets/image/13.jpg"),
        ],
      ],
      activeSlider: 0, // First slider open by default
      currentSlide: 0,
      touchStartX: 0,
      touchOffset: 0,
    };
  },
  methods: {
    toggleSlider(index) {
      if (this.activeSlider === index) {
        this.activeSlider = null; // Close if clicking the open slider
      } else {
        this.activeSlider = index; // Open the clicked slider
        this.currentSlide = 0; // Reset to first slide
      }
    },
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
          this.currentSlide < this.sliderImages[this.activeSlider].length - 1
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
  background-color: #eaeaea;
  height: 80px;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  font-family: "Wanted Sans", sans-serif;
  font-weight: 700;
  color: #b0b0b0;
  cursor: pointer;
  transition: height 0.3s ease;
}

.slider_box.expanded {
  background-color: #bee0c7;
  color: #266533;
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
  transition: transform 0.3s ease;
}

.carousel_item {
  flex: 0 0 100%;
  height: calc(100% - 20px);
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
  background-color: white;
  opacity: 0.6;
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
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
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
