<template>
<router-view :key="$route.fullPath">
  <SearchResults />
</router-view>
  
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";

export default {
  name: "MovieDetail",
  components: {
    SearchResults,
  },
};
</script>
