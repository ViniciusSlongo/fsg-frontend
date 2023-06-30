<template>
    <div class="bg-white mb-2 h-250 rounded-lg">
        <div class="p-3">
        <div class="font-medium ">
            Mais Acessados
        </div>
            <div v-for="item in trending" key="item" class=" mt-2 hover:bg-gray-200 hover:rounded-lg hover:font-medium cursor-pointer">
                <div class="px-2 flex justify-between " @click="goToRoute(item.route)">
                <div class="flex ">
                    <div class="ml-2  ">
                        {{item.name}}
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
                trending: [
                    {name: "CAA Online", route: "caaOnline"},
                    {name: "Eventos", route: "events"},
                    {name: "Certificados", route: "certificates"}
                ],
            }
        },

        methods: {
            goToRoute(route) {
                this.$emit("goToRoute", route)
            }
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