<template>
  <h1>CompleteddAssignments</h1>
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
   
    props:{
        'list':array,
        'title':String,
    },
}
</script>

