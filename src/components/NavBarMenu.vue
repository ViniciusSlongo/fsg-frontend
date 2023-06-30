<template>
    <div class=" bg-white rounded-lg flex justify-between ">
        <div class="flex self-center">
            <menu-button title="Início" color="gray" icon="fa-home" class="mr-3" @click="pushToRoute('')"/>
            <menu-button title="Vida Acadêmica" color="gray" icon="fa-home" class="mr-3" @click="pushToRoute('academic')"/>
            <menu-button title="Financeiro" color="green" icon="fa-dollar-sign" @click="pushToRoute('finance')" />
            <menu-button title="CAA Online" color="red" icon="fa-headphones" class="mr-3" @click="pushToRoute('caaOnline')" />
        </div>
        <div class="flex self-center">
            <menu-button title="Notificações" icon="fa-inbox" color="orange" />
            <menu-button title="Perfil" icon="fa-user" color="gray" />
        </div>
    </div>
</template>

<script>
import MenuButton from "./MenuButton.vue"
import DropdownMenu from "./DropdownMenu.vue"

export default {
    components: {
        MenuButton,
        DropdownMenu
    },
    data() {
        return {

        }
    },

    methods: {
        pushToRoute(layout) {
            this.$router.push({
                name: "home",
                params: { layout }
            });
        }
    }
}
</script>

<style>
</style>