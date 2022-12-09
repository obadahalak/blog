<template>
  <p>updatePosts</p>

  <form >

    <div class="container">
        <div class="group-input">
            <label for="">title:</label>
            <input type="text" v-model="post.title" class="form-control">
            <label for="">name:</label>
            <input type="text" v-model="post.name" class="form-control">
        </div>
    </div>
  </form>
</template>

<script>
import axios from "axios"
export default {
     props: [
   'id'
  ],
data(){
    return {
        post:[]
    }
},
created(){
        axios.get("https://62fdeb76a85c52ee482baba4.mockapi.io/listCourses/posts/"+this.id)
        .then(response => {
            this.post=response.data
        })
        .catch(error=>console.log(error))
}
}
</script>

<style>

</style>