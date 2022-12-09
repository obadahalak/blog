<template>
  <div class="home">posts View</div>
  <PostComponent/>
</template>

<script>
  // @ is an alias to /src
  import PostComponent from "@/components/PostComponent.vue";

  export default {
    name: "LikeView",
    components: {
      PostComponent,
    },
  };
</script>
