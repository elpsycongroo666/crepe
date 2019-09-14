<style lang="less">
.bg-image(@url) {
  background-image: url("@{url}.png");
}
.star {
  float: left;
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image("/images/star48_on");
      }
      &.half {
        .bg-image("/images/star48_half");
      }
      &.off {
        .bg-image("/images/star48_off");
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image("/images/star36_on");
      }
      &.half {
        .bg-image("/images/star36_half");
      }
      &.off {
        .bg-image("/images/star36_off");
      }
    }
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        .bg-image("/images/star24_on");
      }
      &.half {
        .bg-image("/images/star24_half");
      }
      &.off {
        .bg-image("/images/star24_off");
      }
    }
  }
}
</style>

<template>
  <div class="star"
       :class="'star-'+size">
    <span class="star-item"
          v-for="(cls, index) in starClasses"
          :class="cls"
          :key="index"></span>
  </div>
</template>

<script>
// 类名常量
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'

export default {
  props: {
    score: Number,
    size: Number
  },

  computed: {
    /*
    3.2: 3 + 0 + 2
    3.5: 3 + 1 + 1
      */
    starClasses () {
      let arrClass = []
      const intNum = Math.floor(this.score)
      for (let i = 0; i < intNum; i++) {
        arrClass.push(CLASS_ON)
      }
      const decimal = this.score * 10 % 10 // 小数位置
      if (decimal >= 5) {
        arrClass.push(CLASS_HALF)
      }
      while (arrClass.length < 5) {
        arrClass.push(CLASS_OFF)
      }
      return arrClass
    }
  }
}
</script>
