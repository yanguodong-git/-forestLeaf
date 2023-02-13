<template>
  <div class="box">
    <transition-group class="login-bg" name="flip-list" tag="ul">
      <li v-for="bg in loginBgs" :key="bg" class="list-item">
        <img :src="bg" />
      </li>
    </transition-group>
    <div class="login-cover" />
    <div class="inp"></div>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'login'
}
</script> -->
<script setup lang="ts">
const loginBgs = ref([] as Array<string>)
// const loginBgs = ref<string[]>([]);

const loginBg = ref([
  'https://obs-fix-video.obs.cn-north-1.myhwclouds.com/849b5bf7d0274b20a4f60e02d8535f09.jpg',
  'https://obs-fix-video.obs.cn-north-1.myhwclouds.com/7d4364b50cf842ff88f0c8e42a9f2bb0.jpg',
  'https://obs-fix-video.obs.cn-north-1.myhwclouds.com/491020186c374ed5a6a42dcacf3751c3.jpg',
  'https://obs-fix-video.obs.cn-north-1.myhwclouds.com/fea56bce08bb4cffa6605bbc445a048b.jpg',
  'https://obs-fix-video.obs.cn-north-1.myhwclouds.com/f2694a6f84a54440a204c4043f7f1d34.jpg',
  'https://obs-fix-video.obs.cn-north-1.myhwclouds.com/936af5a525aa4347821b237ffe53a49c.jpg'
] as Array<string>)
const phone = ref('' as string)
const bbb = ref('' as string)
const index = ref(0)

onMounted(() => {
  loginBgs.value = [loginBg.value[0]]
  startChange()
  console.log(useRoute().query)
})
const startChange = () => {
  setInterval(() => {
    if (index.value < loginBg.value.length - 1) {
      index.value++
    } else {
      index.value = 0
    }
    loginBgs.value.splice(0, 1, loginBg.value[index.value])
  }, 10000)
}
</script>

<style rel="stylesheet/less" lang="less">
.box {
  width: 100vw;
  height: 100vh;
  min-width: 600px;
  min-height: 680px;
  // background: url(@/assets/image/loginback.png) repeat center;
  background-size: 100%;
  position: fixed;
  overflow: hidden;
  // opacity: 0.5;
  .flip-list-enter-active,
  .flip-list-leave-active {
    transition: all 3s;
  }
  .flip-list-enter,
  .flip-list-leave-active {
    opacity: 0;
  }
  .login-bg li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: 100vh;
    // min-height: 720px;
  }
  .login-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .login-cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 680px;
    background-color: rgba(0, 0, 0, 0.001);
  }
  .inp {
    width: 25vw;
    height: 30vw;
    background: #ffffff;
    opacity: 0.3;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 15px black;
  }
}
</style>
