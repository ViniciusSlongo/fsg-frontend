<template>
  <div class=" w-full">
    <div class="flex">
      <div class="w-1/2 mr-2 text-blue-800" >
          <div>
            <Menu @selected="goToRoute()" :options="academicOptions" title="Vida Acadêmica" v-if="layoutAcademic"/>
            <Menu @selected="handleSelected()" :options="caaOptions" title="CAA Online" v-if="layoutCaaOnline" />
          </div>
          <div v-if="layoutHome">
            <trending />
            <activities/>
          </div>
      </div>
      <NewRequest v-if="showNewRequest"/>
      <absences/>
    </div>
    <schedule v-if="layoutHome" class="my-2"/>
</div>

</template>

<script >
import Schedule from "../components/Schedule.vue"
import Trending from "../components/Trending.vue"
import Absences from "../components/Absences.vue"
import Activities from "../components/Activities.vue"
import Menu from "../components/Menu.vue"
import NewRequest from "../components/NewRequest.vue"


export default {
  
  components: {
    Schedule,
    Trending,
    Absences,
    Activities,
    Menu,
    NewRequest
  },

  data() {
    return {
      layoutHome : true,
      layoutAcademic : false,
      layoutCaaOnline : false,
      showNewRequest: false,
      academicOptions: [
                { name: "Certificados/Eventos", route: "/events" },
                { name: "Documentos Pendentes", route: "/events" },
                { name: "Biblioteca", route: "/events" },
                { name: "Histórico", route: "/events" },
                { name: "Plataforma de Provas", route: "/events" },
                { name: "Documentos Importantes", route: "/events" },
                { name: "Minhas Notas", route: "/events" },
            ],
      
      caaOptions: [
          { name: "Agendamentos", route: "/requests" },
          { name: "Solicitações Online", route: "/events" },
          { name: "Consultar Solicitações", route: "/events" },
          { name: "Realizar Pagamento das Solicitações", route: "/events" },
      ],
    }
  },

  watch: {
      routeLayout(value) {
        this.changeLayout(value)
      },
    },
  
  computed: {
    routeLayout() {
      return this.$route.params.layout
    }
  },

  methods: {
    goToRoute() {
      this.$router.push("/events")
    },
    
    handleSelected(value) {

    },

    changeLayout(value) {
      const layouts = {
        "": { home: true, academic: false, caaOnline: false },
        "academic": { home: false, academic: true, caaOnline: false },
        "caaOnline": { home: false, academic: false, caaOnline: true },
      };

      const selectedLayout = layouts[value] || layouts[""];

      this.layoutHome = selectedLayout.home;
      this.layoutAcademic = selectedLayout.academic;
      this.layoutCaaOnline = selectedLayout.caaOnline;
}
  },  

  mounted() {
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