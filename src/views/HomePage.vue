<template>
  <div class="max-w-[95%] mx-auto md:max-w-full">
    <TrendingMovies />
    <TopVoted />
    <LatestMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import TrendingMovies from "@/components/TrendingMovies.vue";
import TopVoted from "@/components/TopVoted.vue";
import LatestMovies from "@/components/LatestMovies.vue";

export default {
  name: "HomeView",
  components: {
    TrendingMovies,
    TopVoted,
    LatestMovies,
  },
};
</script>
