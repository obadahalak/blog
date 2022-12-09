<template>
  <h1>all-dAssignments</h1>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
    >
           {{ item.title }}
    </li>
  </ul>
 
</template>

<script>
 
  export default {
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
