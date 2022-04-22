<template>
  <div class="max-w-[95%] mx-auto md:max-w-full">
    <DiscoverMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import DiscoverMovies from "@/components/DiscoverMovies.vue";

export default {
  name: "HomeView",
  components: {
    DiscoverMovies,
  },
};
</script>
