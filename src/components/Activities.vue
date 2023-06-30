<template>
          <div class="bg-white h-250 rounded-lg">
            <div class="p-3">
              <div class="font-medium ">
                Atividades Complementares
              </div>
              <div class="mt-2 p-1">
                <Progressbar :progress="64" />
              </div>
            </div>
          </div>
</template>

<script>
import Progressbar from "../components/Progressbar.vue"

export default {

    components: {
        Progressbar
    }
}

</script>
<style scoped>
  .h-500 {
    height: 328px;
  }
  .h-250 {
    height: 160px;
  }
</style>