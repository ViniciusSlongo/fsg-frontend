<template>
  <div>
    <nav-bar-menu/>
  </div>
  <div class="mt-2">
    <router-view/>
  </div>
</template>
<script >
import NavBarMenu from "./components/NavBarMenu.vue"
import Schedule from "./components/Schedule.vue"

export default {
  components : {
    NavBarMenu,
    Schedule
  },  

  methods: {
    changeLayout(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
