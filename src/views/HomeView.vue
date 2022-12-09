<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <LogIn />
    </div>
</template>
  
<script>
// @ is an alias to /src
import LogIn from '@/components/LoginIn.vue'

export default {
    name: 'HomeView',
    components: {
        LogIn
    }
}
</script>
  