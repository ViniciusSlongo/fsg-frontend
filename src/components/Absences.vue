<template>
        <div class="bg-white w-1/2  h-500 rounded-lg">
          <div>
            <div class="p-2">
              <div class="flex">
                <div class="font-medium ">
                  Minhas Faltas -
                </div>
                <div class=" ml-1 italic">
                  Semestre 2023/2
                </div>
              </div>
              <div class="text-sm opacity-50 mb-2">
                Limite 9
              </div>
       
              <div>
              </div>
              <div v-for="cls in schedule" key="cls" class=" justify-between mb-1 pl-1">
                <div class="flex">
                  <div class=" font-medium mr-2">
                    {{ cls.name }}
                  </div>
                  <div :class="absencesClass(cls.status)" class="text-sm rounded-lg px-1">
                    {{ cls.value }}
                  </div>
               </div>

                <div class="flex text-sm" >
                  <div >
                    Faltas
                  </div>
                  <div class="font-medium ml-1">
                    {{ cls.absences }}
                  </div>

                </div>
            
              </div>
            </div>
          </div>
        </div>

</template>

<script>
const OK = 1
const MEDIUM = 2
const BAD = 3
export default {
    data() {
        return {
        absencesLimit: 9 ,
        schedule: [
                    { name: "Programação Orientada a Objeto II", absences: "1", status: OK, value: "Regular" },
                    { name: "Programação Para Dispositivos Móveis",  absences: "4", status: MEDIUM, value: "Atenção" },
                    { name: "Projeto De Banco de Dados",  absences: "7", status: BAD, value: "Ruim" },
                    { name: "Algorítimos e Programação",  absences: "9", status: BAD, value: "Ruim" },
                    { name: "Interface Humano Computador", absences: "2", status: OK, value: "Regular" },
                ],
            }
    },

    methods: {
        absencesClass(status) {
            switch (status) {
                case OK:
                return "text-green-700 bg-green-200"
                case MEDIUM:
                return "text-yellow-700 bg-yellow-200"
                case BAD:
                return "text-red-700 bg-red-200"
            }
        },
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