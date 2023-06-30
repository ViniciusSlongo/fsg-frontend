<template>
    <div class=" w-full">
      <div class="flex mt-2 text-blue-800">
            <div class="bg-white w-1/2 h-700 rounded-lg">
              <div class="p-2">
              <div class="font-medium text-black ">
                Palestras e Eventos
              </div>
              <div v-for="event in eventsList" :key="event.id" class=" mt-2 p-2">
                <div class="flex  mb-1">
                  <div class="font-medium text-black">
                        {{ event.title }}
                  </div>
                  <div class="ml-2 self-center cursor-pointer hover:font-medium"  @click="changeSituation(event.id)">
                    <div class="px-2 text-sm self-center  rounded-lg" :class="eventSituationClass(event.isSubscribed)">
                      {{ eventSituationText(event.isSubscribed) }}
                    </div>
                  </div>
                </div>

                <div class="flex w-64 text-sm rounded-lg bg-gray-200">
                  <div class="mx-2">
                    {{ event.date }} - 
                  </div>
                  <div>
                    {{ event.place }}
                  </div>
                </div>
                <div class=" mt-2 ">
                  {{ event.description }}
                </div>
              </div>
            </div>
            </div>
  
          <div class="bg-white w-1/2 ml-2  h-700 rounded-lg">
            <div class="p-2">
              <div class="font-medium text-black ">
                Certificados
              </div>
              <div class=" pl-2 mt-1 text-black">
                Palestras
              </div>
              <div v-for="event in eventsList.filter((s) => s.isSubscribed)" :key="event.id" class=" mt-1 pl-2">
                <div class="flex  mb-3">
                  <div class="font-medium opacity-50 mr-2 text-sm  self-center">
                    Documento Disponível
                  </div>
                  <div class="font-medium ">
                      {{ event.title }}
                  </div>
                  <div class="ml-1 text-sm rounded-lg  cursor-pointer hover:font-medium ">
                    <div class="px-2 self-center ">
                      <div class="fa-solid self-center fa-download"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" pl-2 mt-4 text-black">
                Pesquisas
              </div>
              <div class=" mt-1 pl-2">
                <div class="flex  mb-3">
                  <div class="font-medium opacity-50 mr-2 text-sm  self-center">
                    Documento Disponível
                  </div>
                  <div class="font-medium ">
                      O mundo depois da COVID-19
                  </div>
                  <div class="ml-1 text-sm rounded-lg  cursor-pointer hover:font-medium ">
                    <div class="px-2 self-center ">
                      <div class="fa-solid self-center fa-download"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  
  </div>
  
  </template>
  
  <script >
  import Schedule from "../components/Schedule.vue"
  import Progressbar from "../components/Progressbar.vue"
  
  const OK = 1
  const MEDIUM = 2
  const BAD = 3
  
  export default {
    
    components: {
      Schedule,
      Progressbar
    },
  
    data() {
      return {
        absencesLimit: 9 ,
        eventsList: [
        { 
          id: 1,
          title: "Inteligência Artificial: Avanços e Aplicações",
          description: "Palestra sobre o impacto da inteligência artificial na sociedade e nas carreiras de TI.",
          date: "20/06/23 às 19:30",
          place: "Teatro Bloco Sede",
          isSubscribed: false
        },
        {
          id: 2,
          title: "Desenvolvimento Web Moderno",
          description: "Workshop prático de desenvolvimento web utilizando as tecnologias mais recentes do mercado.",
          date: "15/06/23 às 19:30",
          place: "Teatro Bloco Sede",
          isSubscribed: false

        },
        {
          id: 3,
          title: "Carreira em Ciência de Dados",
          description: "Palestra sobre as oportunidades e desafios na área de ciência de dados.",
          date: "01/08/23 às 19:30",
          place: "Teatro Bloco Sede",
          isSubscribed: true

        },
        {
          id: 4,
          title: "Cibersegurança: Protegendo seus Dados",
          description: "Apresentação sobre as melhores práticas de segurança da informação e como proteger seus dados pessoais.",
          date: "20/06/23 às 19:30",
          place: "Teatro Bloco Sede",
          isSubscribed: true

        },
      ],
      }
    },
  
    methods: {
      eventSituationText(isSubscribed) {
        return isSubscribed ? "Inscrito" : "Inscrever-se"
      },

      eventSituationClass(isSubscribed) {
        return isSubscribed ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
      },

      changeSituation(id) {
        let idx = this.eventsList.findIndex((l) => l.id == id)
        this.eventsList[idx].isSubscribed = !this.eventsList[idx].isSubscribed

      }
    },  
  
    mounted() {
    }
  }
  </script>
  
  <style scoped>
    .h-700 {
      height: 550px;
    }
 
  </style>