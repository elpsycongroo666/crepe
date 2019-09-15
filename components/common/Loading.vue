<style lang='less' scoped>
.loading {
  text-align: center;
}
.loading-icon {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.demo {
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: #d4ba6a;
  position: absolute;
  animation: demo linear 0.8s infinite;
  -webkit-animation: demo linear 0.8s infinite;
}
.demo:nth-child(1) {
  left: 24px;
  top: 2px;
  animation-delay: 0s;
}
.demo:nth-child(2) {
  left: 40px;
  top: 8px;
  animation-delay: 0.1s;
}
.demo:nth-child(3) {
  left: 47px;
  top: 24px;
  animation-delay: 0.1s;
}
.demo:nth-child(4) {
  left: 40px;
  top: 40px;
  animation-delay: 0.2s;
}
.demo:nth-child(5) {
  left: 24px;
  top: 47px;
  animation-delay: 0.4s;
}
.demo:nth-child(6) {
  left: 8px;
  top: 40px;
  animation-delay: 0.5s;
}
.demo:nth-child(7) {
  left: 2px;
  top: 24px;
  animation-delay: 0.6s;
}
.demo:nth-child(8) {
  left: 8px;
  top: 8px;
  animation-delay: 0.7s;
}
@keyframes demo {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  20% {
    transform: scale(3);
  }
}
@-webkit-keyframes demo {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  20% {
    transform: scale(3);
  }
}
.text {
  color: #999;
  margin-top: 12px;
  font-size: 14px;
}
</style>
<template>
  <div class="loading">
    <div class="loading-icon">
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
    </div>
    <div class="text">{{text}}</div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: '正在加载'
    }
  }
}
</script>
