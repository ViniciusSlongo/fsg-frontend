<template>
    <div class="bg-white h-500 mb-2 rounded-lg">
        <div class="p-3">
        <div class="font-medium ">
            {{title}}
        </div>
            <div v-for="option in options" key="item" class=" mt-2 hover:bg-gray-200 hover:rounded-lg hover:font-medium cursor-pointer">
                <div class="px-2 flex justify-between " @click="goToRoute(option.route)">
                <div class="flex ">
                    <div class="ml-2  ">
                        {{option.name}}
                    </div>
                </div>
                </div>
            </div>
        </div>
</div>
</template>

  
  <script>
  import MenuButton from "./MenuButton.vue"
  export default {
    components : {
        MenuButton
    },

    props: {
      options: {
        type: Array
      },

      title: {
        type: String
      }
    },

    methods: {
      goToRoute(route) {
        this.$emit("selected", route)
      }
    },
  };
  </script>
  
  <style scoped>
  .h-500 {
    height: 328px;
  }
  .h-250 {
    height: 160px;
  }
</style>