<template>
  <div class="bg-white rounded-lg w-full p-3">
    <div class="font-medium mb-4">
      Agenda Semanal
    </div>
    <div class="flex">
      <div
        v-for="day in daysOfWeek"
        :key="day"
        class="w-card rounded-lg mr-1"
        :class="getDayClass(day)"
      >
        <div class="justify-center p-2">
          <div class="font-medium mb-1">{{ day }}</div>
          <div v-for="subject in schedule[day]" :key="subject.name" class="border-l-2 border-solid border-black border-0">
            <div class="text-sm ml-2 mb-1 truncate">
              {{ subject.name }}
            </div>
            <div class="text-sm ml-2 mb-1">
              {{ subject.time }}
            </div>
            <div class="text-sm ml-2 rounded-lg text-white bg-gray-700 flex truncate">
              <div class="px-2">
                {{ subject.place }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-card rounded-lg mr-1 bg-orange-200 max-h-28 overflow-y-scroll"
      >
        <div class="justify-center p-2 mb-12 h-full">
          <div class="font-medium mb-1 flex">

            <div class="ml-2 self-end flex italic text-xs text-gray-500">
              Disciplinas Online
            </div>
          </div>
          <div class="border-l-2 mb-2 border-solid border-black border-0">
            <div class="text-sm  ml-2  truncate">
              Modelagem de Dados
            </div>
            <div class="text-xs ml-2  rounded-lg text-gray-600 flex truncate">
                Ciclo 1 - Março/2023
            </div>
          </div>
          <div class="border-l-2 mb-2 border-solid border-black border-0">
            <div class="text-sm  ml-2  truncate">
              Segurança da Informação
            </div>
            <div class="text-xs ml-2  rounded-lg text-gray-600 flex truncate">
                Ciclo 2 - Agosto/2023
            </div>
          </div>
          <div class="border-l-2 mb-2 border-solid border-black border-0">
            <div class="text-sm  ml-2  truncate">
              Cálculo Numérico
            </div>
            <div class="text-xs ml-2  rounded-lg text-gray-600 flex truncate">
                Ciclo 1 - Março/2023
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysOfWeek: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      schedule: {
        Segunda: [
          { name: "Programação Orientada a Objeto II", time: "19:30 - 22:30", place: "Sala 223 - Campus Sede" },
        ],
        Terça: [
          { name: "Programação Para Dispositivos Móveis",  time: "19:30 - 22:30", place: "Sala 223 - Campus Sede" },
        ],
        Quarta: [
          { name: "Projeto De Banco de Dados",  time: "19:30 - 22:30", place: "Sala 223 - Campus Sede" },
        ],
        Quinta: [
          { name: "Algoritmos e Programação",  time: "19:30 - 22:30", place: "Sala 224 - Campus Sede" },
        ],
        Sexta: [
          { name: "Interface Humano Computador", time: "19:30 - 22:30", place: "Sala 224 - Campus Sede" },
        ],
        Sábado: [
          { name: "Itinerário Extensionista", time: "08:00 - 11:00", place: "Online" },
        ], 

      },
    };
  },
  methods: {
    getDayClass(day) {
      const colors = [
        'bg-blue-200',
        'bg-green-200',
        'bg-yellow-200',
        'bg-purple-200',
        'bg-pink-200',
        'bg-red-200',  
      ];
      const index = this.daysOfWeek.indexOf(day);
      return colors[index];
    },
  },
};
</script>

<style>

.w-card {
  width: 14%;
}

::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #888;
    opacity: 0.6;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
</style>
