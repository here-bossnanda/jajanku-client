<template>
<div>
  <Navbar />
  <hello-world />
</div>

</template>

<script>
import Navbar from '@/components/Navbar'
import HelloWorld from '../components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    HelloWorld
  }
}
</script>
