<template>
  <div class="container">
    <VueEditor />
  </div>
</template>

<script>
import VueEditor from "@/components/post/editor.vue";
export default {
  components: {
    VueEditor
  }

};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
</style>
