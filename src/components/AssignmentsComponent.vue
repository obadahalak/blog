<template>
  <h1>all-dAssignments</h1>
  <ul>
    <li
      v-for="item in list"
      :key="item.id"
    >
      {{ item.title }}
    </li>
  </ul>
  <CreatePostComponent :list="list" />
</template>

<script>
 
    import CreatePostComponent from "../components/CreatePostComponent.vue";
  export default {
    components:{CreatePostComponent},
    data() {
      return {
        list: [
          { title: "title1", status: false },
          { title: "title2", status: true },
          { title: "title3", status: false },
          { title: "title4", status: false },
        ],
      };
    },

  };
</script>
