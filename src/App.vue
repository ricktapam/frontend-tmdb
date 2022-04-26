<template>

  <div class="md:container md:max-w-screen-xl md:px-20 md:mx-auto md:mt-5">
    <NavBar />

    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <MyFooter />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MyFooter,
  },
};
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
