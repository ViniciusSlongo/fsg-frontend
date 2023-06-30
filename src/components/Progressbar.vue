<template>
      <div class="flex justify-end text-xl mr-2 mb-1 ">
        {{ progress }} %
      </div>
    <div class="progressbar">
      <div class="progressbar__bar" :style="{ width: progress + '%' }">
      </div>
    </div>


  </template>
  
  <script>
    export default {
      props: {
        progress: {
          type: Number,
          required: true,
          validator: (value) => value >= 0 && value <= 100,
        },
      
      },

      computed:{
          progressInHours() {
            return (this.progress / 200) * 100;
          }

        }
    };
  </script>
  
  <style scoped>
  .progressbar {
    @apply bg-blue-100;

    width: 100%;
    height: 25px;

    border-radius: 5px;
    overflow: hidden;
  }
  
  .progressbar__bar {
    @apply  bg-blue-700;

    height: 100%;
    transition: width 0.3s;
  }
  </style>
  