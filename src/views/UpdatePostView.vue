<template>
  <UpdatePostComponent  :id="this.$route.params.id" />
</template>
  
<script>  
import UpdatePostComponent from '@/components/UpdatePostComponent.vue';

export default{

       components:{
       UpdatePostComponent , 

    },
    
    
}
</script>
