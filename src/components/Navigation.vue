<template>
  <div class="container-menu" :class="{ active }">
    <div class="btn-menu" @click="active = !active">
      <div class="ligne"></div>
    </div>
    <router-link :to="{ name: 'theme-chooser' }" class="blob blob-1">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </router-link>
    <div class="blob blob-2">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
    <div class="blob blob-3">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
    <div class="blob blob-4">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
    <div class="blob blob-5">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
    <div class="blob blob-6">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
    <div class="blob blob-7">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
    <div class="blob blob-8">
      <img src="@/assets/Img/princess.png" alt="icone" class="icone" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(false);
    return {
      active,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-menu {
  width: 250px;
  position: fixed;
  top: 7%;
  &.active {
    .ligne::before {
      transform: translateY(10px) rotate(-45deg);
    }
    .ligne {
      background: transparent;
    }
    .ligne::after {
      transform: translateY(-10px) rotate(45deg);
    }
  }
  .btn-menu {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    cursor: pointer;
  }

  &.active {
    .blob-1 {
      top: 80px;
    }
    .blob-2 {
      top: 160px;
    }
    .blob-3 {
      top: 240px;
    }
    .blob-4 {
      top: 320px;
    }
    .blob-5 {
      top: 400px;
    }
    .blob-6 {
      top: 480px;
    }
    .blob-7 {
      top: 560px;
    }
    .blob-8 {
      top: 640px;
    }
  }
  .blob {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #f1f1f1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border: rgba(255, 255, 255, 0.829) 3px solid;
    cursor: pointer;
    &:hover {
      box-shadow: 8px 8px 2px 1px rgba(254, 255, 255, 0.637);
    }
    &.blob-1 {
      background: #f39390;
      transition: all 0.2s 0.1s ease-in-out;
    }
    &.blob-2 {
      background: #829cd6;
      transition: all 0.2s 0.2s ease-in-out;
    }
    &.blob-3 {
      background: #f7c87c;
      transition: all 0.2s 0.3s ease-in-out;
    }
    &.blob-4 {
      background: #da95d0;
      transition: all 0.2s 0.4s ease-in-out;
    }
    &.blob-5 {
      background: #e6f592;
      transition: all 0.2s 0.5s ease-in-out;
    }
    &.blob-6 {
      background: #9adad6;
      transition: all 0.2s 0.6s ease-in-out;
    }
    &.blob-7 {
      background: #b693df;
      transition: all 0.2s 0.7s ease-in-out;
    }
    &.blob-8 {
      background: #c8f7ba;
      transition: all 0.2s 0.8s ease-in-out;
    }

    .icone {
      width: 60px;
    }
  }
  .ligne {
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-in-out;
    &::before {
      content: "";
      position: absolute;
      bottom: 10px;
      background: #333;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
    }
    &::after {
      content: "";
      position: absolute;
      top: 10px;
      background: #333;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>