<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <b-card>
        <b-form-input
                v-model="wordEntry.word"
                type="text"
                placeholder="Новое слово"
                @change="setWordEntry()"
                :state="wordEntry.word.length?'success':'warning'"
        >

        </b-form-input>
        <small class="text-muted">Подходящее по правилам игры в слова</small>

        <br>
        <br>

        <b-form-input v-model="wordEntry.username" type="text" placeholder="Ник" :state="wordEntry.username.length?'success':'warning'"></b-form-input>
        <small class="text-muted">Ваш никнейм/имя</small>

        <br>
        <br>

        <b-form-input textarea v-model="wordEntry.comment" placeholder="Комментарий"></b-form-input>
        <small class="text-muted">Без нецензурной лексики</small>

        <br>
        <br>

        <b-button v-on:click="addWord">Добавить</b-button>


    </b-card>
</template>

<script>
    export default {
        data: function () {
            return {
             }
        },
        methods: {
            addWord () {
                this.$store.dispatch('addWordEntry');
            },
            setWordEntry() {
                this.$store.dispatch('setNewWordEntry', this.wordEntry);
            },

        },
        computed: {
            wordEntry(){
                return this.$store.getters.newWordEntry
            }
        }


    }
</script>

<style>


</style>
