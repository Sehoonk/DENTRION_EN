<template>
  <div class="container">
    <div class="img_container">
      <img width="100%" src="../assets/image/기공소_01.jpg" alt="" />
    </div>
    <div class="img_container">
      <img width="100%" src="../assets/image/기공소_02.jpg" alt="" />
    </div>
    <div class="img_container">
      <img width="100%" src="../assets/image/기공소_03.jpg" alt="" />
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
  padding: 80px 10px;
  gap: 3px;
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
}

/* 이미지 컨테이너 스타일 */
.img_container {
  width: calc(100% - 20px);
  max-width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  display: inline-block;
}

/* 이미지 스타일 */
.img_container > img {
  height: 100%;
  object-fit: cover;
  max-width: 100%;
}
</style>
