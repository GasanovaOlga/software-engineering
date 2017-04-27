<template >
    <div v-if="wordEntry.word">
        <h2>{{wordEntry.word}}</h2>
        <h4>Добавлено пользователем: {{wordEntry.username}} </h4>
        <span>Комментарий: {{wordEntry.comment}}</span>

    </div>
    <div v-else>
        Слово не выбрано :(
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
            }
        },
        methods: {
        },
        computed: {
            wordEntry(){
                return this.$store.getters.selectedWordEntry
            }
        }


    }
</script>

<style>


</style>
