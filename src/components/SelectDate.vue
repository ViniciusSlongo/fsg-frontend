<template>
    <div class="flex w-full">
      <select v-model="day" id="day" class="border border-gray-300 rounded px-4 py-1 ">
        <option value="">Dia</option>
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </select>
  
      <select v-model="month" id="month" class="border border-gray-300 rounded px-4  ml-2">
        <option value="">Mês</option>
        <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
      </select>
  
      <select v-model="year" id="year" class="border border-gray-300 rounded px-4  ml-2">
        <option value="">Ano</option>
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
  
    </div>
  </template>
  
  <script>
  export default {

    props: {
        date: {
            type: Object
        }
    },

    watch: {
        day(newValue) {
        this.updateDate();
        },

        month(newValue) {
        this.updateDate();
        },

        year(newValue) {
        this.updateDate();
        }
    },

    data() {
      return {
        year: "",
        month: "",
        day: "",
        days: Array.from({ length: 31 }, (_, index) => index + 1),
        months: [
          'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        years: Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + index)
      };
    },

    methods: {
        updateDate() {
            this.$emit("update:date", {
                day: this.day,
                month: this.months[this.month],
                year: this.year
            });
        }
    }
  }
  </script>
  
  <style>
  </style>
  