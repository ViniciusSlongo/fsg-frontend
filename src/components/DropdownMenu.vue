<template>
    <div>
      <menu-button title="Vida Acadêmica" icon="fa-graduation-cap" color="blue" class="mr-3 " @click="toggleDropdown" />
      <div v-if="isOpen" class="dropdown__menu shadow-xl bg-white border-solid border-2 border-gray-100 rounded-lg ">
        <div v-for="option in options" :key="option" @click="selectOption(option)">
            <div class="px-2 my-1 text-sm cursor-pointer hover:font-medium">
                {{ option.name }}
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
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        isOpen: false,
        selectedOption: null,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
        this.$emit("SelectOption", option.route)
      },
    },
  };
  </script>
  
  <style scoped>

  .dropdown__menu {
  position: fixed;
  top: 85px;
  left: 110px; 
}
  </style>