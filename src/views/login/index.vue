<template>
  <div class="box">
    <transition-group name="list" tag="ul">
      <li v-for="bg in loginBgs" :key="bg" class="list-item">
        <img :src="bg" />
      </li>
    </transition-group>
    <div class="inp">
      <div class="inp_user">
        <el-input v-model="userName" placeholder="user" />
        <form>
          <el-input v-model="passWord" show-password type="password" placeholder="password" />
        </form>
        <yanzhengma />
      </div>
      <div class="btn">
        <el-button type="primary" @click="singIn">登录</el-button>
        <el-button type="">找回密码</el-button>
      </div>
    </div>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: 'login'
}
</script> -->
<script setup lang="ts">
import router from '@/router'
import yanzhengma from './components/yanzhengma.vue'
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
const userName = ref('' as string)
const passWord = ref('' as string)
const index = ref(0)

onMounted(() => {
  loginBgs.value = [loginBg.value[0]]
  startChange()
  console.log(useRoute())
})
const singIn = () => {
  if (userName.value === '') {
    ElMessage.error('用户名不能为空')
  } else if (passWord.value === '') {
    ElMessage.error('密码不能为空')
  } else {
    ElMessage.success('登录成功')
    router.push({
      path: '/channel',
      query: {}
    })
  }
}
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
  position: fixed;
  .list-enter-active,
  .list-leave-active {
    transition: all 2s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
  }
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .inp {
    width: 25vw;
    height: 23vw;
    padding: 30px;
    background-color: rgba(251, 248, 248, 0.46);
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 15px black;
    .inp_user {
      margin: 30px 0;
      .el-input {
        margin-bottom: 30px;
        height: 40px;
      }
    }
    .btn {
      .el-button {
        width: 120px;
        height: 39px;
      }
      position: fixed;
      bottom: 40px;
    }
  }
}
</style>
