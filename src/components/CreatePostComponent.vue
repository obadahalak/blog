<template>
  <form @submit.prevent="save">
    <label>title</label>
    <input
      v-model="title"
      type="text"
      class="forom-control"
    >
    <button class="btn btn-primary m-2">
      Save
    </button>
  </form>
</template>
<script>
export default {
 props:{
    list : Array
 },
data(){
    return {
        title:'',
        lists:this.list,
    }
    
},
methods:{
    save(){
        this.lists.push({
            title:'asd',
            status:false
        });
    }
}

}

</script>