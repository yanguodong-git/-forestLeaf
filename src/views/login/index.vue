<template>
  <div class="box">
    <div class="inp"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'login'
}
</script>
<script setup lang="ts">
const phone = ref('')
const bbb = ref('')
onMounted(() => {})
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/image/loginback.png) repeat center;
  background-size: 100%;
  // opacity: 0.5;
  .inp {
    width: 25vw;
    height: 30vw;
    background: skyblue;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 15px black;
  }
}
</style>
