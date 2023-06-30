<template>
<div class="bg-white h-500 mb-2 rounded-lg text-blue-800">
  <div class="p-3 font-medium">
    CAA ONLINE - Agendamentos
  </div>
  <div class="w-1/2 p-8 ml-10 bg-blue-100 mb-2 rounded-lg ">
    <div class="flex ">
        <div  class="fa-regular fa-user fa-2xl self-center "/>
        <div class=" font-medium ml-5">
          <div class="text-2xl">
            Andressa Benedet
          </div>
          <div class="opacity-50">
            FSG Centro Universitário da Serra Gaúcha
          </div>
      </div>
    </div>
    <div class="mt-8 flex justify-between">
      <div class="flex">
        <div class="font-medium">
          RGM
        </div>
        <div class="ml-1">
          302403858
        </div>
      </div>
      <div class="flex">
        <div class="font-medium">
          Celular
        </div>
        <div class="ml-1">
          54 9 96123477
        </div>
      </div>
      <div class="flex">
        <div class="font-medium">
          E-mail
        </div>
        <div class="ml-1">
          andressa_benedet@hotmail.com
        </div>
      </div>
      
    </div>
    <div class="mt-8">
      <div>
        <label for="unidade" class="block mb-1 text-sm opacity-50">Unidade para atendimento</label>
        <select v-model="request.selectedUnity" id="unidade" class="border border-gray-200 rounded px-2 py-1 w-3/4">
          <option value="">Selecione</option>
          <option value="FSG - Caxias Graduação">FSG - Caxias Graduação</option>
        </select>
      </div>

      <div class="mt-4">
        <label for="assunto" class="block mb-1 text-sm opacity-50">Assunto que deseja atendimento</label>
        <select v-model="request.selectedOption" id="assunto" class="border border-gray-200 rounded px-2 py-1 w-3/4">
          <option value="">Selecione</option>
          <option value="Acadêmico">Acadêmico</option>
          <option value="Atenção: Plano de Contingência">Atenção: Plano de Contingência</option>
          <option value="Comunicação e Marketing">Comunicação e Marketing</option>
          <option value="Diversos">Diversos</option>
          <option value="Financeiro">Financeiro</option>
          <option value="Financeiro Estudantil">Financeiro Estudantil</option>
        </select>
      </div>
      <div class=" mt-6" >
        <select-date :date="request.date" @update:date="handleUpdateDate"/>
      </div>
      <div class="mt-6  flex justify-end">
        <div @click="handleSaveRequest()" class="w-36 text-center border border-solid rounded-lg border-blue-800 font-medium cursor-pointer hover:bg-blue-800 hover:text-blue-100 hover:border-blue-100">
          Salvar Requisição
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>


import SelectDate from "../components/SelectDate.vue"

export default {

  components: {
    SelectDate
  },

  data() {
    return {
      request: {
        selectedUnity:"",
        selectedOption:"",
        date :{          
            year: "",
            month: "",
            day:"",
          }
      },
      selectedOption: ""
    }
  },

  methods: {
    handleUpdateDate(newDate) {
      this.request.date = newDate;
    },

    handleSaveRequest() {

    }
  }
}

</script>

<style scoped>
.h-500 {
  height: 550px;
}
.h-250 {
  height: 160px;
}
</style>