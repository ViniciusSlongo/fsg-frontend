<template>
        <div :class="`hover:${textColor}`" class="p-4 hover:font-medium cursor-pointer self-center">
            <div class="flex justify-center">
            <div :class="`${icon} ${textColor}`" class="fa-solid"/>
            </div>
            <div :class="textColor" class="mt-2 text-center text-sm ">
             {{ title }}
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            title :{
                type: String,
                required: true
            },
            color : {
                type: String,
                required: true
            },
            icon : {
                type: String,
            }
        },
        data() {
            return {

            }
        },

        computed: {
            borderColor() {
                return `border-${this.color}-700`
            },

            textColor() {
                return `text-${this.color}-700`
            }
        }
    }
</script>

<style>


</style>